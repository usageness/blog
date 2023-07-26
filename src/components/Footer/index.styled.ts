'use client';
import COLORS from 'styles/color';

import styled from 'styled-components';

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
