'use client';
import BREAKPOINTS from 'styles/breakpoint';
import COLORS from 'styles/color';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 4rem;
  height: 100vh;

  background: linear-gradient(
    0deg,
    ${COLORS.GREEN_002} 0%,
    ${COLORS.GREEN_003} 100%
  );

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    width: 4px;
  }
`;

export { Wrapper };
