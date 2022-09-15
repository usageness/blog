import usePost from 'hooks/usePost';

import { useParams } from 'react-router-dom';

import * as S from './index.styled';

function Post() {
  const { id } = useParams();
  const { title, date, content } = usePost(Number(id));

  if (!content) return <></>;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.Content dangerouslySetInnerHTML={content} />
    </S.Container>
  );
}

export default Post;
