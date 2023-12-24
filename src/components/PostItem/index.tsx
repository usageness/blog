import * as S from './index.styled';

interface PostItemProps {
  title: string;
  subTitle: string;
  date: string;
}

function PostItem({ title, subTitle, date }: PostItemProps) {
  return (
    <S.Container>
      <h2>{title}</h2>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Date>{date}</S.Date>
    </S.Container>
  );
}

export default PostItem;
