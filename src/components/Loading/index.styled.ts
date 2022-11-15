import styled from '@emotion/styled';
import { bounce } from 'components/Animation';
import COLORS from 'styles/color';

const Screen = styled.div`
  display: block;
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  background: ${COLORS.WHITE_002};
`;

const BallBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Ball = styled.div`
  display: inline-block;

  width: 1rem;
  height: 1rem;

  margin: 1rem;

  border-radius: 50%;

  animation: ${bounce} 1.5s infinite;

  &:nth-of-type(2) {
    animation-delay: 0.25s;

    background-color: ${COLORS.GREEN_002};
  }

  &:first-of-type {
    margin-right: -0.5rem;

    background-color: ${COLORS.GREEN_003};
  }

  &:last-of-type {
    margin-left: -0.5rem;
    animation-delay: 0.5s;

    background-color: ${COLORS.GREEN_001};
  }
`;

export { Screen, BallBox, Ball };
