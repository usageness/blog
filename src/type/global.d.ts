interface Post {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  content: string;
  navigator: Array<{
    parsedHeadText: string;
    parsedId: string;
    depth: number;
  }>;
}

interface PostSummary {
  id: Post['id'];
  title: Post['title'];
  subTitle: Post['subTitle'];
}

export { Post, PostSummary };
