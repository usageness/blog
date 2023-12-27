import { Post, PostSummary } from 'type/global';

import { parseDocument } from 'utils/parse';

const usePost = async (id: number) => {
  let currentContent: Post | null = null;
  let prevData: PostSummary | null = null;
  let nextData: PostSummary | null = null;

  currentContent = await import(`posts/${id}.md`)
    .then(data => {
      return parseDocument(id, data.default);
    })
    .catch(() => {
      return null;
    });

  prevData = await import(`posts/${id - 1}.md`)
    .then(data => {
      return parseDocument(id, data.default);
    })
    .catch(() => {
      return null;
    });

  nextData = await import(`posts/${id + 1}.md`)
    .then(data => {
      return parseDocument(id, data.default);
    })
    .catch(() => {
      return null;
    });

  /** parsing 예시
   * <hr>
   * <p>title: 우아한테크코스 레벨3 후기
   * subTitle: 안녕하세요
   * date: 2022-09-14</p>
   * <hr>
   */

  if (!currentContent)
    return {
      title: '',
      subTitle: '',
      date: '',
      content: { __html: '' },
      prevTitle: prevData?.title,
      nextTitle: nextData?.title,
      navigator: [],
    };

  return {
    title: currentContent?.title,
    subTitle: currentContent?.subTitle,
    date: currentContent?.date,
    content: { __html: currentContent ? currentContent.content : '' },
    prevTitle: prevData?.title,
    nextTitle: nextData?.title,
    navigator: currentContent.navigator,
  };
};

export default usePost;
