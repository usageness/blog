import useList from 'hooks/useList';
import { Link } from 'react-router-dom';

import PostItem from 'components/PostItem';

function Home() {
  const { list } = useList();

  if (list.length === 0) return <></>;

  return (
    <>
      {list.map(post => (
        <Link to={`/post/${post.id}`} key={post.id}>
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

export default Home;
