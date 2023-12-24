'use client';
import Link from 'next/link';

import * as S from './index.styled';

function Header() {
  return (
    <S.Wrapper>
      <Link href="/">
        <h1>식물원</h1>
      </Link>
      <Link href="/post/1">
        <S.SubMenu>about</S.SubMenu>
      </Link>
    </S.Wrapper>
  );
}

export default Header;
