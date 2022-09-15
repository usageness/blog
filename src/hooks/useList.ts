import { useEffect, useState } from 'react';

import { Post } from 'type/global';
import { parseDocument } from 'utils/parse';

const useList = () => {
  const [postNumber, setPostNumber] = useState<number>(1);
  const [list, setList] = useState<Post[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const loadAllPost = () => {
    if (isError) return;

    import(`posts/${postNumber}.md`)
      .then(data => {
        setList([parseDocument(postNumber, data.default), ...list]);
        setPostNumber(postNumber + 1);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    if (isError) return;

    loadAllPost();
  }, [list]);

  return { list };
};

export default useList;
