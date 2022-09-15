import COLORS from 'styles/color';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  display: inline;
  font-size: 2rem;
  font-weight: bold;

  padding: 0.5rem 0;
`;

const Content = styled.div`
  font-size: 1rem;

  padding: 1rem 0;

  h1 {
    font-size: 2rem;
    font-weight: bold;

    padding: 2rem 0 1rem 0;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: bold;

    padding: 2rem 0 1rem 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;

    padding: 2rem 0 1rem 0;
  }

  p {
    padding: 0.5rem 0;
  }

  ul {
    list-style-type: disc;
  }

  li {
    padding: 0.5rem 0;
  }

  blockquote {
    font-weight: bold;

    margin: 0.5rem 0;
    padding: 0.5rem 1.5rem;

    border-left: 0.5rem solid ${COLORS.GRAY_001};
    background: ${COLORS.GRAY_002};
  }
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${COLORS.YELLOW_001};
`;

export { Container, Title, Content, Date };
