const TYPOGRAPHY = {
  size: {
    xs: '0.75rem', // 12px — 캡션, 레이블, 날짜
    sm: '0.875rem', // 14px — 메타정보, 코드, 보조 텍스트
    base: '1rem', // 16px — 본문
    lg: '1.125rem', // 18px — 강조 UI 요소
    xl: '1.25rem', // 20px — h3, 소제목
    '2xl': '1.5rem', // 24px — h2, 섹션 제목
    '3xl': '1.875rem', // 30px — 포스트 내 h1
    '4xl': '2.25rem', // 36px — 페이지 타이틀
  },
  lineHeight: {
    tight: '1.25', // 제목
    snug: '1.375', // 소제목
    normal: '1.5', // 일반 UI
    relaxed: '1.625', // 본문
    loose: '1.85', // 장문 콘텐츠
  },
} as const;

export default TYPOGRAPHY;
