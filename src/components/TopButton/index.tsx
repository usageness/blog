'use client';
import { useState } from 'react';

import Image from 'next/image';

import Top from 'assets/image/top.svg';

import * as S from './index.styled';

function TopButton() {
  const [isTop, setIsTop] = useState(true);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', () => {
    setIsTop(document.documentElement.scrollTop === 0);
  });

  return (
    <S.Top
      className={isTop ? '' : 'visible'}
      onClick={scrollToTop}
      disabled={isTop}
    >
      <Image src={Top} alt="go to top of page" />
    </S.Top>
  );
}

export default TopButton;
