const 분당_가독_글자수 = 500;

/**
 * @desc HTML 문자열에서 태그를 제거하고 텍스트만 추출
 * @param htmlString HTML 형식의 문자열
 */
export function removeHtmlTags(htmlString: string): string {
  /** SSR 환경 대응 */
  if (typeof window === 'undefined') {
    return htmlString.replace(/<[^>]*>?/gm, '');
  }

  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
}

export function cleanText(text: string): string {
  return text.trim().replace(/\s+/g, ' ');
}

/**
 * @desc 포스트를 읽는데 소모되는 예상 시간을 계산하는 함수
 * @todo 이미지, 코드 등 복합 컨텐츠 계산 로직 추가 필요
 */
export function calculateReadingTime(htmlContent: string): number {
  const plainText = removeHtmlTags(htmlContent);
  const cleanedText = cleanText(plainText);

  const totalChars = cleanedText.length;

  const minutes = Math.ceil(totalChars / 분당_가독_글자수);

  return minutes;
}
