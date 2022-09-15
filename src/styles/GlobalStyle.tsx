import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import COLORS from './color';

const style = () => css`
  ${emotionReset}

  a {
    text-decoration: none;
    color: ${COLORS.BLACK_001};
  }

  p {
    line-height: 1.5rem;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
