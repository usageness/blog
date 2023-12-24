import Link from 'next/link';

import { Post } from 'type/global';

import Cover from 'components/Cover';
import PostItem from 'components/PostItem';

import { parseDocument } from 'utils/parse';

const getData = async () => {
  let postNumber = 1;
  let list: Post[] = [];
  let error = false;

  while (!error) {
    await import(`posts/${postNumber}.md`)
      .then(data => {
        list = [parseDocument(postNumber, data.default), ...list];
        postNumber += 1;
      })
      .catch(err => {
        error = true;
      });
  }

  return list;
};

export default async function Page() {
  const list = await getData();

  if (list.length === 0) return <></>;

  return (
    <>
      <Cover />
      {list.map(post => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <PostItem
            title={post.title}
            subTitle={post.subTitle}
            date={post.date}
          />
        </Link>
      ))}
    </>
  );
}
