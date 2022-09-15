import { useState } from 'react';

import useMount from 'hooks/useMount';
import { Post } from 'type/global';
import { parseDocument } from 'utils/parse';

const usePost = (id: number) => {
  const [content, setContent] = useState<Post>(undefined);

  const loadPost = () => {
    import(`posts/${id}.md`).then(data => {
      setContent(parseDocument(id, data.default));
    });
  };

  // <hr>
  // <p>title: 우아한테크코스 레벨3 후기
  // subTitle: 안녕하세요
  // date: 2022-09-14</p>
  // <hr>

  useMount(() => {
    loadPost();
  });

  return {
    title: content?.title,
    subTitle: content?.subTitle,
    date: content?.date,
    content: { __html: content?.content },
  };
};

export default usePost;
