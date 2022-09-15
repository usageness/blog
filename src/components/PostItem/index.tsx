import { StrictMode } from 'react';
import * as S from './index.styled';

interface PostItemProps {
  title: string;
  subTitle: string;
  date: string;
}

function PostItem({ title, subTitle, date }: PostItemProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Date>{date}</S.Date>
    </S.Container>
  );
}

export default PostItem;
