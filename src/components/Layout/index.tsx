import Footer from 'components/Footer';
import Header from 'components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const displayContainerStyle = {
  display: 'flex',
};

const contentsContainerStyle = {
  width: 'calc(100% - 2rem)',
  maxHeight: '100vh',
  padding: '0 1rem 1rem 1rem',
  overflowY: 'scroll',
} as React.CSSProperties;

const postAreaContainerStyle = {
  maxWidth: '45rem',
  margin: 'auto',
};

const postWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
} as React.CSSProperties;

function Layout({ children }: LayoutProps) {
  return (
    <div style={displayContainerStyle}>
      <div style={contentsContainerStyle}>
        <div style={postAreaContainerStyle}>
          <Header />
          <div style={postWrapperStyle}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
