import COLORS from 'styles/color';
import BREAKPOINTS from 'styles/breakpoint';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    gap: 0;
  }
`;

const Title = styled.h1`
  display: inline;
  font-size: 2.3rem;
  font-weight: bold;
  line-height: 2.5rem;

  padding: 0.5rem 0;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Content = styled.div`
  font-size: 1rem;

  padding: 1rem 0;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.5rem;

    padding: 2rem 0 1rem 0;

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 2.5rem;

    padding: 2rem 0 1rem 0;
    margin-top: 2rem;

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2.25rem;

    padding: 2rem 0 1rem 0;

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.1rem;
      line-height: 1.5rem;
    }
  }

  a {
    border-bottom: 2px dashed ${COLORS.GRAY_003};

    &:hover {
      color: ${COLORS.GRAY_002};
    }
  }

  p {
    padding: 1rem 0;
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

    margin: 1rem 0;
    padding: 0.5rem 1.5rem;

    border-left: 0.5rem solid ${COLORS.GRAY_003};
    background: ${COLORS.GRAY_004};
  }

  img {
    display: block;

    max-width: calc(100vw - 3.1rem);

    margin: 4rem auto;
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

  padding-bottom: 2rem;
  border-bottom: 0.25rem solid;
  border-image: linear-gradient(
    90deg,
    ${COLORS.GREEN_001} 0%,
    ${COLORS.YELLOW_002} 100%
  );
  border-image-slice: 1;
`;

const Profile = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5%;

  word-break: keep-all;

  color: ${COLORS.GRAY_001};

  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 0.25rem solid;
  border-image: linear-gradient(
    90deg,
    ${COLORS.GREEN_001} 0%,
    ${COLORS.YELLOW_002} 100%
  );
  border-image-slice: 1;

  img {
    width: 128px;

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

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PostLink = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  & > h5 {
    font-size: 1.5rem;
    font-weight: bold;

    border-bottom: 0.5rem solid ${COLORS.GREEN_001};

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      align-items: flex-end;

      font-size: 1.25rem;
    }

    @media only screen and (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 1rem;

      border-bottom: 0.25rem solid ${COLORS.GREEN_001};
    }
  }
`;

const PrevLink = styled(PostLink)``;

const NextLink = styled(PostLink)`
  text-align: right;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    align-items: flex-end;
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
