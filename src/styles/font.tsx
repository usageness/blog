import { css } from 'styled-components';

const { origin } = window.location;

const fontStyle = css`
  @font-face {
    font-family: 'SCDreamBold';
    src: url('${origin}/SCDreamBold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'SCDreamRegular';
    src: url('${origin}/SCDreamRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
`;

export { fontStyle };