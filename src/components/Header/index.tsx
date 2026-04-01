'use client';
import Link from 'next/link';

import * as S from './index.styled';

function Header() {
  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>식물원</S.Logo>
      </Link>
      <Link href="/post/1">
        <S.SubMenu>about</S.SubMenu>
      </Link>
    </S.Wrapper>
  );
}

export default Header;
