'use client';
import Image from 'next/image';
import Link from 'next/link';

import Tree from 'assets/image/tree.svg';
import * as S from './index.styled';

function Header() {
  return (
    <S.Wrapper>
      <Link href="/">
        <Image src={Tree} alt="go to main page" />
      </Link>
    </S.Wrapper>
  );
}

export default Header;
