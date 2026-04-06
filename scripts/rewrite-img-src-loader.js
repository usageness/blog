/**
 * webpack 로더: 마크다운에서 생성된 HTML 문자열 내
 * <img src="/images/..."> 를 Next.js 이미지 최적화 경로로 치환합니다.
 *
 * /_next/image?url=/images/...&w=1080&q=80
 */

module.exports = function rewriteImgSrcLoader(source) {
  return source.replace(
    /<img([^>]*)\ssrc="(\/images\/[^"]+)"([^>]*)>/g,
    (match, before, src, after) => {
      const optimizedSrc = `/_next/image?url=${encodeURIComponent(
        src,
      )}&w=1080&q=80`;
      return `<img${before} src="${optimizedSrc}"${after}>`;
    },
  );
};
