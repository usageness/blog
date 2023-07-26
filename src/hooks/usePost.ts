import { Post, PostSummary } from 'type/global';
import { parseDocument } from 'utils/parse';

const usePost = async (id: number) => {
  let content: Post | null = null;
  let prevData: PostSummary | null = null;
  let nextData: PostSummary | null = null;

  content = await import(`posts/${id}.md`)
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

  if (!content)
    return {
      title: '',
      subTitle: '',
      date: null,
      content: { __html: '' },
      prevTitle: prevData?.title,
      nextTitle: nextData?.title,
    };

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
