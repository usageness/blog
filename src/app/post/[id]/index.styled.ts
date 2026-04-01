'use client';
import BREAKPOINTS from 'styles/breakpoint';
import COLORS from 'styles/color';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    gap: 0;
  }
`;

const Title = styled.h1`
  display: block;
  font-size: 2.3rem;
  font-weight: bold;
  font-family: 'SCDreamBold';
  line-height: 1.3;

  padding: 1rem 0 0.5rem 0;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.85;
  word-break: break-word;
  overflow-wrap: break-word;

  padding: 1.5rem 0;

  h1 {
    font-size: 1.9rem;
    font-weight: bold;
    line-height: 1.4;

    margin: 2.5rem 0 0.75rem 0;

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.4rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.4;

    margin: 2.5rem 0 0.75rem 0;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid ${COLORS.GRAY_004};

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.4;

    margin: 2rem 0 0.5rem 0;

    @media only screen and (max-width: ${BREAKPOINTS.md}px) {
      font-size: 1.05rem;
    }
  }

  a {
    color: ${COLORS.GREEN_002};
    text-decoration: underline;
    text-decoration-color: ${COLORS.GREEN_003};
    text-underline-offset: 3px;
    transition: color 0.15s ease;

    &:hover {
      color: ${COLORS.GREEN_001};
    }
  }

  p {
    padding: 0.5rem 0;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.25rem;
  }

  ol {
    list-style-type: decimal;
    padding-left: 1.25rem;
  }

  li {
    line-height: 1.75;
    padding: 0.2rem 0;
  }

  blockquote {
    margin: 1.25rem 0;
    padding: 0.75rem 1.25rem;

    border-left: 3px solid ${COLORS.GREEN_003};
    background: ${COLORS.GRAY_004};
    border-radius: 0 4px 4px 0;

    color: ${COLORS.GRAY_001};
    font-size: 0.95rem;
  }

  pre {
    overflow-x: auto;
    padding: 1rem 1.25rem;
    margin: 1.25rem 0;
    border-radius: 6px;
    background: ${COLORS.GRAY_004};
    font-size: 0.875rem;
    line-height: 1.6;
  }

  code {
    font-size: 0.875em;
  }

  pre code {
    word-break: normal;
    overflow-wrap: normal;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 2.5rem auto;
    border-radius: 6px;
  }

  table {
    display: block;
    overflow-x: auto;
    width: 100%;
    border-collapse: collapse;
    margin: 1.25rem 0;
  }

  td, th {
    border: 1px solid ${COLORS.GRAY_003};
    padding: 0.5rem 0.75rem;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 1.25rem;
  border-bottom: 1px solid ${COLORS.GRAY_004};
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.GRAY_002};
`;

const ReadTime = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.GRAY_002};
`;

const Profile = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1.25rem;

  word-break: keep-all;

  color: ${COLORS.GRAY_001};

  padding: 1.75rem 0;
  margin-top: 1rem;
  border-top: 1px solid ${COLORS.GRAY_004};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: bold;

    padding: 0.25rem 0;
  }

  p {
    font-size: 0.9rem;
    color: ${COLORS.GRAY_002};

    padding: 0.1rem 0;
  }
`;

const ImageWrapper = styled.div`
  max-height: 128px;

  border-radius: 70%;
  overflow: hidden;
  aspect-ratio: 1;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    min-width: 100px;
  }

  img {
    width: 100%;
  }
`;

const PostNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: 2rem;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
  }
`;

const PostLink = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_004};

  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${COLORS.GREEN_003};
    background: #f7faf5;
  }

  & > p {
    font-size: 0.78rem;
    color: ${COLORS.GREEN_002};
    font-weight: 600;
    letter-spacing: 0.03em;
  }

  & > h5 {
    font-size: 1rem;
    font-weight: bold;
    color: ${COLORS.GRAY_001};
    line-height: 1.4;

    @media only screen and (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 0.9rem;
    }
  }
`;

const PrevLink = styled(PostLink)`
  text-align: left;
`;

const NextLink = styled(PostLink)`
  text-align: right;
  align-items: flex-end;
`;

const HeaderNavigator = styled.div`
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);

  width: 200px;
  max-height: 70vh;
  overflow-y: auto;

  border-left: 2px solid ${COLORS.GRAY_004};
  padding: 0.25rem 0 0.25rem 1rem;

  ul > li {
    margin: 0.4rem 0;

    &[data-depth='2'] > a { padding-left: 0.75rem; }
    &[data-depth='3'] > a { padding-left: 1.5rem; }
    &[data-depth='4'] > a { padding-left: 2.25rem; }
    &[data-depth='5'] > a { padding-left: 3rem; }
    &[data-depth='6'] > a { padding-left: 3.75rem; }

    a {
      color: ${COLORS.GRAY_002};
      font-size: 0.78rem;
      line-height: 1.5;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: color 0.15s ease;

      &:hover {
        color: ${COLORS.GRAY_001};
      }
    }

    .current-heading {
      color: ${COLORS.GREEN_001};
      font-weight: 600;
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.xl}px) {
    display: none;
  }
`;

export {
  Container,
  Title,
  Content,
  Info,
  Date,
  ReadTime,
  Profile,
  ImageWrapper,
  PostNavigator,
  HeaderNavigator,
  PrevLink,
  NextLink,
};
