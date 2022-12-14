import Footer from 'components/Footer';
import Header from 'components/Header';

import * as S from './index.styled';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <Footer />
    </S.Container>
  );
}

export default Layout;
