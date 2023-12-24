'use client';
import BREAKPOINTS from 'styles/breakpoint';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 3;

  overflow: hidden;
  border-radius: 15px;

  margin: 2rem 0;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    img {
      display: none;
    }

    aspect-ratio: 0;
    margin: 1rem;
  }
`;

export { Wrapper };
