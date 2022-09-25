interface Post {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  content: string;
}

interface PostSummary {
  id: Post['id'];
  title: Post['title'];
  subTitle: Post['subTitle'];
}

export { Post, PostSummary };
