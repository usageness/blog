import COLORS from 'styles/color';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

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
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 1rem;
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${COLORS.YELLOW_001};
`;

export { Container, Title, SubTitle, Date };
