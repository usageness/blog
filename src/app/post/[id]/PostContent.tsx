'use client';
import { createRef, useEffect, useRef, RefObject } from 'react';

import { Post } from 'type/global';

import { calculateReadingTime } from 'utils/post';

import * as S from './index.styled';

interface ImportedPost extends Omit<Post, 'content' | 'id' | 'subTitle'> {
  content: {
    __html: string;
  };
}

export default function PostContent({
  title,
  date,
  content,
  navigator,
}: ImportedPost) {
  const headingNavigatorRefs = useRef<RefObject<HTMLAnchorElement>[]>([]);
  headingNavigatorRefs.current = Array.from({ length: navigator.length }).map(
    () => createRef(),
  );

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('.content-heading'),
    );

    const scrollContainer = document.getElementById('scroll-container');
    const SCROLL_OFFSET = 80;

    const updateActiveHeading = () => {
      let activeIndex = -1;

      headingElements.forEach((heading, index) => {
        const { top } = heading.getBoundingClientRect();
        if (top <= SCROLL_OFFSET) {
          activeIndex = index;
        }
      });

      headingNavigatorRefs.current.forEach(ref =>
        ref.current?.classList.remove('current-heading'),
      );

      if (activeIndex >= 0) {
        headingNavigatorRefs.current[activeIndex].current?.classList.add(
          'current-heading',
        );
      }
    };

    updateActiveHeading();
    scrollContainer?.addEventListener('scroll', updateActiveHeading, {
      passive: true,
    });

    return () => {
      scrollContainer?.removeEventListener('scroll', updateActiveHeading);
    };
  }, [navigator]);

  if (content.__html === undefined) {
    return <></>;
  }

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Info>
        <S.Date>{date}</S.Date>
        <S.ReadTime>{`${calculateReadingTime(
          content.__html,
        )} min read`}</S.ReadTime>
      </S.Info>
      <S.HeaderNavigator>
        <ul>
          {navigator.map(({ parsedHeadText, parsedId, depth }, i) => {
            return (
              <li key={parsedHeadText} data-depth={depth}>
                <a
                  href={`#${parsedId}`}
                  ref={headingNavigatorRefs.current[i]}
                  className="heading"
                >
                  {parsedHeadText}
                </a>
              </li>
            );
          })}
        </ul>
      </S.HeaderNavigator>
      <S.Content dangerouslySetInnerHTML={content} />
    </>
  );
}
