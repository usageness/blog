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
  line-height: 2.5rem;

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
    line-height: 2.5rem;

    padding: 2rem 0 1rem 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;

    padding: 2rem 0 1rem 0;
  }

  a {
    border-bottom: 2px dashed ${COLORS.GRAY_003};

    &:hover {
      color: ${COLORS.GRAY_002};
    }
  }

  p {
    padding: 0.5rem 0;
  }

  ul {
    list-style-type: disc;
  }

  li {
    line-height: 1.5rem;

    margin-left: 1rem;
    padding: 0.25rem 0;
  }

  blockquote {
    font-weight: bold;

    margin: 0.5rem 0;
    padding: 0.5rem 1.5rem;

    border-left: 0.5rem solid ${COLORS.GRAY_003};
    background: ${COLORS.GRAY_004};
  }

  img {
    display: block;

    max-width: calc(100vw - 3.1rem);

    margin: auto;
  }

  @media (min-width: 45rem) {
    img {
      max-width: calc(42rem);
    }
  }
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${COLORS.YELLOW_001};
`;

const Profile = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5%;

  word-break: keep-all;

  color: ${COLORS.GRAY_001};

  padding: 2rem 0;

  img {
    border-radius: 70%;
    overflow: hidden;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;

    padding: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: ${COLORS.GRAY_002};

    padding: 0.25rem 0;
  }
`;

const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrevLink = styled.button`
  text-align: left;

  border-bottom: 0.5rem solid ${COLORS.GREEN_001};

  & > h5 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const NextLink = styled.button`
  text-align: right;

  border-bottom: 0.5rem solid ${COLORS.GREEN_001};

  & > h5 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export {
  Container,
  Title,
  Content,
  Date,
  Profile,
  Navigator,
  PrevLink,
  NextLink,
};
