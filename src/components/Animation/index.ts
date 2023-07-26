import { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 33% {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(0, -1rem, 0);
  }
`;

export { bounce };
