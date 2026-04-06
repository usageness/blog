'use client';
import { css } from 'styled-components';

// ─── Primitive Tokens ────────────────────────────────────────────────────────

const size = {
  xs: '0.75rem', //  12px
  sm: '0.875rem', //  14px
  base: '1rem', //  16px
  lg: '1.125rem', //  18px
  xl: '1.25rem', //  20px
  '2xl': '1.5rem', //  24px
  '3xl': '1.875rem', //  30px
  '4xl': '2.25rem', //  36px
} as const;

const lineHeight = {
  tight: '1.25', // 제목
  snug: '1.375', // 소제목
  normal: '1.5', // 일반 UI
  relaxed: '1.625', // 본문
  loose: '1.85', // 장문 콘텐츠
} as const;

const fontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700,
  black: 900,
} as const;

// ─── Semantic Text Styles ────────────────────────────────────────────────────

const textStyle = {
  /** 포스트 페이지 제목 */
  postTitle: css`
    font-size: ${size['4xl']};
    line-height: ${lineHeight.tight};
    font-weight: ${fontWeight.bold};
    font-family: 'SCDreamBold';
  `,

  /** 포스트 본문 내 h1 */
  sectionHeading: css`
    font-size: ${size['3xl']};
    line-height: ${lineHeight.snug};
    font-weight: ${fontWeight.bold};
    font-family: 'SCDreamBold';
  `,

  /** 포스트 본문 내 h2 */
  subHeading: css`
    font-size: ${size['2xl']};
    line-height: ${lineHeight.snug};
    font-weight: ${fontWeight.bold};
  `,

  /** 포스트 본문 내 h3, 목록 아이템 제목 */
  itemHeading: css`
    font-size: ${size.xl};
    line-height: ${lineHeight.normal};
    font-weight: ${fontWeight.bold};
  `,

  /** UI 헤딩 — 프로필 이름, 헤더 로고 */
  uiHeading: css`
    font-size: ${size.lg};
    line-height: ${lineHeight.normal};
    font-weight: ${fontWeight.bold};
  `,

  /** 포스트 장문 본문 */
  body: css`
    font-size: ${size.base};
    line-height: ${lineHeight.loose};
    font-weight: ${fontWeight.regular};
  `,

  /** 일반 UI 텍스트 */
  ui: css`
    font-size: ${size.base};
    line-height: ${lineHeight.normal};
    font-weight: ${fontWeight.regular};
  `,

  /** 날짜, 읽기 시간, 부제목, 코드 등 보조 텍스트 */
  meta: css`
    font-size: ${size.sm};
    line-height: ${lineHeight.normal};
    font-weight: ${fontWeight.regular};
  `,

  /** 레이블, 캡션, 네비게이션 링크 */
  label: css`
    font-size: ${size.xs};
    line-height: ${lineHeight.normal};
    font-weight: ${fontWeight.semibold};
  `,
} as const;

// ─── Export ──────────────────────────────────────────────────────────────────

const TYPOGRAPHY = { size, lineHeight, fontWeight, textStyle } as const;

export default TYPOGRAPHY;
