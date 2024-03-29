'use client';
import BREAKPOINTS from 'styles/breakpoint';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6rem;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    height: 4rem;
  }
`;

const SubMenu = styled.h3`
  font-size: 1.17em;
`;

export { Wrapper, SubMenu };
