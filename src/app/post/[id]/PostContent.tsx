'use client';
import { createRef, useEffect, useRef, RefObject } from 'react';

import { Post } from 'type/global';

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
    const headingContent = Array.from(
      document.querySelectorAll('.content-heading'),
    );

    const observerCallback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        const index = headingContent.findIndex(element => {
          return element === entry.target;
        });

        if (entry.isIntersecting) {
          headingNavigatorRefs.current.forEach(ref =>
            ref.current?.classList.remove('current-heading'),
          );

          headingNavigatorRefs.current[index].current?.classList.add(
            'current-heading',
          );
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    headingContent.forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, [navigator]);

  if (content.__html === undefined) {
    return <></>;
  }

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.HeaderNavigator>
        <ul>
          {navigator.map(({ parsedHeadText, parsedId, depth }, i) => {
            parsedId = parsedId.replace(/'/g, '');
            parsedId = parsedId.replace(/"/g, '');
            parsedId = parsedId.replace(/,/g, '');
            parsedId = parsedId.replace(/\?/g, '');
            return (
              <li key={parsedHeadText}>
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
