import Footer from 'components/Footer';
import Header from 'components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const containerStyle = {
  maxWidth: '45rem',
  margin: 'auto',
  padding: '0 1rem 1rem 1rem',
};

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
};

function Layout({ children }: LayoutProps) {
  return (
    <div style={containerStyle}>
      <Header />
      <div style={wrapperStyle as React.CSSProperties}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
