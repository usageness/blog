'use client';
import BREAKPOINTS from 'styles/breakpoint';
import COLORS from 'styles/color';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4rem;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    height: 3.5rem;
  }
`;

const Logo = styled.span`
  font-family: 'SCDreamBold';
  font-size: 1.2rem;
  color: ${COLORS.BLACK_001};
  transition: color 0.15s ease;

  &:hover {
    color: ${COLORS.GRAY_001};
  }
`;

const SubMenu = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.GRAY_002};
  transition: color 0.15s ease;

  &:hover {
    color: ${COLORS.GRAY_001};
  }
`;

export { Wrapper, Logo, SubMenu };
