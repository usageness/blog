import { useEffect } from 'react';
import { PostSummary } from 'type/global';
import { setMetaTags } from 'utils/metatag';

export const useMetaTag = (content: PostSummary) => {
  useEffect(() => {
    if (!content) return;

    setMetaTags(content?.title, content?.subTitle);
  }, [content]);
};

export default useMetaTag;
