'use client';
import BREAKPOINTS from 'styles/breakpoint';
import COLORS from 'styles/color';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 0;

  cursor: pointer;

  &:hover {
    h2 {
      background: linear-gradient(
        90deg,
        ${COLORS.GREEN_001} 0%,
        ${COLORS.YELLOW_002} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    gap: 0.25rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${COLORS.YELLOW_001};
`;

export { Container, SubTitle, Date };
