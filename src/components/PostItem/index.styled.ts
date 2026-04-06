'use client';
import BREAKPOINTS from 'styles/breakpoint';
import COLORS from 'styles/color';
import TYPOGRAPHY from 'styles/typography';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${COLORS.GRAY_004};

  cursor: pointer;

  h2 {
    ${TYPOGRAPHY.textStyle.itemHeading}
    color: ${COLORS.BLACK_001};
    transition: color 0.15s ease;
  }

  &:hover h2 {
    color: ${COLORS.GREEN_001};
  }

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    padding: 1.25rem 0;

    h2 {
      font-size: ${TYPOGRAPHY.size.lg};
    }
  }
`;

const SubTitle = styled.p`
  ${TYPOGRAPHY.textStyle.meta}
  color: ${COLORS.GRAY_001};
  margin-top: 0.4rem;
`;

const Date = styled.p`
  ${TYPOGRAPHY.textStyle.label}
  color: ${COLORS.GRAY_002};
  margin-top: 0.75rem;
`;

export { Container, SubTitle, Date };
