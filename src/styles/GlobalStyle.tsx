'use client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import BREAKPOINTS from './breakpoint';
import COLORS from './color';
import { fontStyle } from './font';

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
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 2.5rem;

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  h2 {
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.5rem;

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: ${COLORS.BLACK_001};
  }

  p {
    line-height: 1.75rem;
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
