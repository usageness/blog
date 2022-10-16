import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import COLORS from './color';

const style = () => css`
  ${emotionReset}

  h1, h2, h3, h4, h5 {
    word-break: keep-all;
  }

  a {
    text-decoration: none;
    color: ${COLORS.BLACK_001};
  }

  p {
    line-height: 1.5rem;
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
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
