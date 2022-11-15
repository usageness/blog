import * as S from './index.styled';

function Loading() {
  return (
    <S.Screen>
      <S.BallBox>
        {[...Array(3)].map((_, idx) => (
          <S.Ball key={idx} />
        ))}
      </S.BallBox>
    </S.Screen>
  );
}

export default Loading;
