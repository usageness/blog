import usePost from 'hooks/usePost';

import { Link, useParams } from 'react-router-dom';

import Profile from 'assets/image/profile.jpg';
import * as S from './index.styled';

function Post() {
  const { id } = useParams();
  const { title, date, content, prevTitle, nextTitle } = usePost(Number(id));

  if (content.__html === undefined) {
    return <></>;
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.Content dangerouslySetInnerHTML={content} />
      <S.Profile>
        <img src={Profile} alt="profile" />
        <div>
          <Link to="/post/1">
            <h4>유세지</h4>
          </Link>
          <p>나누고 함께 성장하는 개발자가 되고 싶습니다.</p>
        </div>
      </S.Profile>
      <S.Navigator>
        {prevTitle ? (
          <Link to={`/post/${Number(id) - 1}`}>
            <S.PrevLink>
              <p>이전 글</p>
              <h5>{prevTitle}</h5>
            </S.PrevLink>
          </Link>
        ) : (
          <div></div>
        )}
        {nextTitle && (
          <Link to={`/post/${Number(id) + 1}`}>
            <S.NextLink>
              <p>다음 글</p>
              <h5>{nextTitle}</h5>
            </S.NextLink>
          </Link>
        )}
      </S.Navigator>
    </S.Container>
  );
}

export default Post;
