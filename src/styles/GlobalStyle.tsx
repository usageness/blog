'use client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import COLORS from './color';

const GlobalStyle = createGlobalStyle`
  ${reset}
  h1,
  h2,
  h3,
  h4,
  h5 {
    word-break: keep-all;
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
