'use client';
import styled from 'styled-components';
import COLORS from 'styles/color';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 7rem;

  padding-top: 1rem;

  a {
    text-align: center;

    color: ${COLORS.YELLOW_003};
  }
`;

export { Wrapper };
