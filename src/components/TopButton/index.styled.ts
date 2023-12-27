import BREAKPOINTS from 'styles/breakpoint';

import styled from 'styled-components';

const Top = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 2rem;

  img {
    border-radius: 50%;
    opacity: 0;
    backdrop-filter: blur(0);
    transition: opacity 0.25s ease-in-out, backdrop-filter 0.25s ease-in-out;
  }

  &.visible {
    img {
      opacity: 1;
      backdrop-filter: blur(2.5px);
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export { Top };
