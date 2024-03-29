import { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import Profile from 'assets/image/profile.jpg';

import usePost from 'hooks/usePost';

import TopButton from 'components/TopButton';

import { parseDocument } from 'utils/parse';

import * as S from './index.styled';
import PostContent from './PostContent';

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
  // 나중에 이거 참고해서 작업하기 https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
  return {
    title: content.title,
    description: content.subTitle,
    authors: [{ name: 'usage', url: 'https://github.com/usage' }],
    openGraph: {
      type: 'article',
      title: content.title,
      description: content.subTitle,
      images: [
        'https://user-images.githubusercontent.com/28296575/198838771-84438140-d95a-4899-b5bc-35cbaa92184a.png',
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.subTitle,
      creator: '@dev_usage',
      images: [
        'https://user-images.githubusercontent.com/28296575/198838771-84438140-d95a-4899-b5bc-35cbaa92184a.png',
      ],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { title, date, content, prevTitle, nextTitle, navigator } =
    await usePost(Number(params.id));

  if (content.__html === undefined) {
    return <></>;
  }

  // if (window) window.scrollTo(0, 0);

  return (
    <S.Container>
      <PostContent
        title={title}
        date={date}
        content={content}
        navigator={navigator}
      />
      <S.Profile>
        <S.ImageWrapper>
          <Image src={Profile} alt="profile" />
        </S.ImageWrapper>
        <div>
          <Link href="/post/1">
            <h4>유세지</h4>
          </Link>
          <p>나누고 함께 성장하는 개발자가 되고 싶습니다.</p>
        </div>
      </S.Profile>
      <S.PostNavigator>
        {prevTitle ? (
          <Link href={`/post/${Number(params.id) - 1}`}>
            <S.PrevLink>
              <p>이전 글</p>
              <h5>{prevTitle}</h5>
            </S.PrevLink>
          </Link>
        ) : (
          <div />
        )}
        {nextTitle && (
          <Link href={`/post/${Number(params.id) + 1}`}>
            <S.NextLink>
              <p>다음 글</p>
              <h5>{nextTitle}</h5>
            </S.NextLink>
          </Link>
        )}
      </S.PostNavigator>
      <TopButton />
    </S.Container>
  );
}
