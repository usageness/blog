import { useEffect, useState } from 'react';

import { Post, PostSummary } from 'type/global';
import { parseDocument } from 'utils/parse';
import useMetaTag from './useMetaTag';

const usePost = (id: number) => {
  const [content, setContent] = useState<Post | null>(null);
  const [prevData, setPrevData] = useState<PostSummary | null>(null);
  const [nextData, setNextData] = useState<PostSummary | null>(null);

  const loadCurrentPost = () => {
    import(`posts/${id}.md`).then(data => {
      setContent(parseDocument(id, data.default));
    });
  };

  const loadPrevPost = () => {
    import(`posts/${id - 1}.md`)
      .then(data => {
        setPrevData(parseDocument(id, data.default));
      })
      .catch(() => {
        setPrevData(null);
      });
  };

  const loadNextPost = () => {
    import(`posts/${id + 1}.md`)
      .then(data => {
        setNextData(parseDocument(id, data.default));
      })
      .catch(() => {
        setNextData(null);
      });
  };

  /** parsing 예시
   * <hr>
   * <p>title: 우아한테크코스 레벨3 후기
   * subTitle: 안녕하세요
   * date: 2022-09-14</p>
   * <hr>
   */

  useEffect(() => {
    loadCurrentPost();
    loadPrevPost();
    loadNextPost();
    window.scrollTo(0, 0);
  }, [id]);

  useMetaTag(content);

  return {
    title: content?.title,
    subTitle: content?.subTitle,
    date: content?.date,
    content: { __html: content ? content.content : '' },
    prevTitle: prevData?.title,
    nextTitle: nextData?.title,
  };
};

export default usePost;
