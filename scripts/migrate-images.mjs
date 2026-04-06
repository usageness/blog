/**
 * 마크다운 포스트의 외부 이미지 URL을 로컬 파일로 마이그레이션합니다.
 *
 * 사용법: node scripts/migrate-images.mjs
 *
 * - src/posts/*.md 에서 외부 이미지 URL을 추출
 * - public/images/{포스트번호}/ 에 다운로드
 * - 마크다운 파일의 URL을 /images/{포스트번호}/{파일명} 으로 교체
 */

import https from 'node:https';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src/posts');
const PUBLIC_IMAGES_DIR = path.join(ROOT, 'public/images');

const CONTENT_TYPE_TO_EXT = {
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/png': '.png',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/svg+xml': '.svg',
  'image/avif': '.avif',
  'image/bmp': '.bmp',
};

function extFromContentType(contentType) {
  if (!contentType) return '.jpg';
  const mime = contentType.split(';')[0].trim();
  return CONTENT_TYPE_TO_EXT[mime] ?? '.jpg';
}

function baseFilenameFromUrl(url) {
  const urlObj = new URL(url);
  const segments = urlObj.pathname.split('/').filter(Boolean);
  let base = segments[segments.length - 1] ?? 'image';

  // query string에서 format 힌트 추출 (e.g. ?format=jpg)
  const formatHint = urlObj.searchParams.get('format');

  const existingExt = path.extname(base);
  if (!existingExt && formatHint) {
    base += '.' + formatHint;
  }

  return base;
}

function downloadImage(originalUrl, destDir) {
  return new Promise((resolve, reject) => {
    const fetch = (targetUrl, redirectCount = 0) => {
      if (redirectCount > 10) {
        reject(new Error(`Too many redirects: ${originalUrl}`));
        return;
      }

      const protocol = targetUrl.startsWith('https://') ? https : http;

      protocol
        .get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
          // 리다이렉트 처리
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            res.resume();
            const next = res.headers.location.startsWith('http')
              ? res.headers.location
              : new URL(res.headers.location, targetUrl).href;
            fetch(next, redirectCount + 1);
            return;
          }

          if (res.statusCode !== 200) {
            res.resume();
            reject(new Error(`HTTP ${res.statusCode}: ${targetUrl}`));
            return;
          }

          const contentType = res.headers['content-type'] ?? '';
          const ext = extFromContentType(contentType);

          let base = baseFilenameFromUrl(originalUrl);
          if (!path.extname(base)) {
            base += ext;
          }

          // 파일명 충돌 방지: 이미 존재하면 숫자 suffix 추가
          let finalName = base;
          let counter = 1;
          while (fs.existsSync(path.join(destDir, finalName))) {
            const { name, ext: e } = path.parse(base);
            finalName = `${name}_${counter}${e}`;
            counter++;
          }

          const destPath = path.join(destDir, finalName);
          const writeStream = fs.createWriteStream(destPath);
          res.pipe(writeStream);
          writeStream.on('finish', () => resolve(finalName));
          writeStream.on('error', reject);
          res.on('error', reject);
        })
        .on('error', reject);
    };

    fetch(originalUrl);
  });
}

// 마크다운에서 외부 이미지 URL 추출: ![alt](url)
const IMAGE_MD_REGEX = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;

async function migratePost(mdFile) {
  const postName = path.basename(mdFile, '.md'); // e.g. "3"
  const content = fs.readFileSync(mdFile, 'utf8');

  const matches = [...content.matchAll(IMAGE_MD_REGEX)];
  if (matches.length === 0) {
    console.log(`[${postName}] 외부 이미지 없음, 건너뜀`);
    return;
  }

  const destDir = path.join(PUBLIC_IMAGES_DIR, postName);
  fs.mkdirSync(destDir, { recursive: true });

  let updated = content;
  let successCount = 0;
  let failCount = 0;

  for (const match of matches) {
    const [fullMatch, alt, url] = match;
    process.stdout.write(`  [${postName}] 다운로드: ${url.slice(0, 70)}...`);

    try {
      const filename = await downloadImage(url, destDir);
      const localPath = `/images/${postName}/${filename}`;
      updated = updated.replace(fullMatch, `![${alt}](${localPath})`);
      console.log(` -> ${localPath}`);
      successCount++;
    } catch (err) {
      console.log(` 실패: ${err.message}`);
      failCount++;
    }
  }

  if (successCount > 0) {
    fs.writeFileSync(mdFile, updated, 'utf8');
    console.log(`[${postName}] 완료: ${successCount}개 교체, ${failCount}개 실패\n`);
  } else {
    console.log(`[${postName}] 교체된 항목 없음 (${failCount}개 실패)\n`);
  }
}

async function main() {
  const mdFiles = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join(POSTS_DIR, f));

  console.log(`포스트 ${mdFiles.length}개 처리 시작\n`);
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });

  for (const file of mdFiles) {
    await migratePost(file);
  }

  console.log('마이그레이션 완료');
}

main().catch((err) => {
  console.error('예기치 않은 오류:', err);
  process.exit(1);
});
