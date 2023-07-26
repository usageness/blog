import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import usePost from 'hooks/usePost';
import TopButton from 'components/TopButton';
import { parseDocument } from 'utils/parse';

import Profile from 'assets/image/profile.jpg';
import * as S from './index.styled';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = Number(params.id);

  const content = await import(`posts/${id}.md`)
    .then(data => {
      return parseDocument(id, data.default);
    })
    .catch(() => {
      return {
        id,
        title: '',
        subTitle: '',
        date: '',
        content: '',
      };
    });

  return {
    title: content.title,
    description: content.subTitle,
    openGraph: {
      images: [
        'https://user-images.githubusercontent.com/28296575/198838771-84438140-d95a-4899-b5bc-35cbaa92184a.png',
      ],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { title, date, content, prevTitle, nextTitle } = await usePost(
    Number(params.id),
  );

  if (content.__html === undefined) {
    return <></>;
  }
  // if (window) window.scrollTo(0, 0);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.Content dangerouslySetInnerHTML={content} />
      <S.Profile>
        <Image src={Profile} alt="profile" />
        <div>
          <Link href="/post/1">
            <h4>유세지</h4>
          </Link>
          <p>나누고 함께 성장하는 개발자가 되고 싶습니다.</p>
        </div>
      </S.Profile>
      <S.Navigator>
        {prevTitle ? (
          <Link href={`/post/${Number(params.id) - 1}`}>
            <S.PrevLink>
              <p>이전 글</p>
              <h5>{prevTitle}</h5>
            </S.PrevLink>
          </Link>
        ) : (
          <div></div>
        )}
        {nextTitle && (
          <Link href={`/post/${Number(params.id) + 1}`}>
            <S.NextLink>
              <p>다음 글</p>
              <h5>{nextTitle}</h5>
            </S.NextLink>
          </Link>
        )}
      </S.Navigator>
      <TopButton />
    </S.Container>
  );
}
