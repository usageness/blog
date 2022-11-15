import useList from 'hooks/useList';
import { Link } from 'react-router-dom';

import PostItem from 'components/PostItem';
import Loading from 'components/Loading';
import { useContext } from 'react';
import { LoadingContext } from 'contexts/state';

function Home() {
  const { isLoading } = useContext(LoadingContext);
  const { list } = useList();

  if (list.length === 0) return <></>;

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
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
      )}
    </>
  );
}

export default Home;
