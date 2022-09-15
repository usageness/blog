import Tree from 'assets/image/tree.svg';

import { Link } from 'react-router-dom';

import * as S from './index.styled';

function Header() {
  return (
    <S.Wrapper>
      <Link to="/">
        <img src={Tree} alt="go to main page" />
      </Link>
    </S.Wrapper>
  );
}

export default Header;
