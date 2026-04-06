'use client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import BREAKPOINTS from './breakpoint';
import COLORS from './color';
import { fontStyle } from './font';
import TYPOGRAPHY from './typography';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontStyle}

  body {
    max-height: 100vh;
    overflow-y: hidden;
    font-family: 'SCDreamRegular';
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'SCDreamBold';
    word-break: keep-all;
  }

  h1 {
    display: inline-block;
    font-family: 'SCDreamBlack';
    font-size: ${TYPOGRAPHY.size['4xl']};
    font-weight: bold;
    line-height: ${TYPOGRAPHY.lineHeight.tight};

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: ${TYPOGRAPHY.size['2xl']};
    }
  }

  h2 {
    display: inline-block;
    font-size: ${TYPOGRAPHY.size['3xl']};
    font-weight: bold;
    line-height: ${TYPOGRAPHY.lineHeight.tight};

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: ${TYPOGRAPHY.size['xl']};
    }
  }

  a {
    text-decoration: none;
    color: ${COLORS.BLACK_001};
  }

  p {
    line-height: ${TYPOGRAPHY.lineHeight.relaxed};
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    cursor: pointer;
  }

  strong {
    font-weight: bold;
  }

  ::selection {
    background: ${COLORS.GREEN_001};
    color: ${COLORS.WHITE_001};
  }
`;

export default GlobalStyle;
