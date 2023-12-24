'use client';
import Image from 'next/image';

import Grass from 'assets/image/grass.jpg';

import * as S from './index.styled';

function Cover() {
  return (
    <S.Wrapper>
      <Image
        src={Grass}
        fill={true}
        style={{
          objectFit: 'cover',
        }}
        alt="cover"
      />
    </S.Wrapper>
  );
}

export default Cover;
