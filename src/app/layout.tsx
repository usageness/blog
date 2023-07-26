import GlobalStyle from 'styles/GlobalStyle';

import Layout from 'components/Layout';
import StyledComponentsRegistry from 'components/Registry';

export const metadata = {
  openGraph: {
    title: '유세지의 식물원',
    description: '유세지의 식물원입니다',
    url: 'https://blog-usageness.vercel.app',
    siteName: '유세지의 식물원',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/28296575/198838771-84438140-d95a-4899-b5bc-35cbaa92184a.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://user-images.githubusercontent.com/28296575/198838771-84438140-d95a-4899-b5bc-35cbaa92184a.png',
        width: 1800,
        height: 1600,
        alt: '유세지의 식물원',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="유세지의 식물원" />
        <meta name="description" content="유세지의 식물원입니다" />
        <meta property="og:title" content="유세지의 식물원" />
        <meta property="twitter:title" content="유세지의 식물원" />
        <meta name="og:description" content="유세지의 식물원입니다" />
        <meta name="twitter:description" content="유세지의 식물원입니다" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/28296575/198838771-84438140-d95a-4899-b5bc-35cbaa92184a.png"
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/28296575/198838771-84438140-d95a-4899-b5bc-35cbaa92184a.png"
        />
        <meta
          name="google-site-verification"
          content="7yylzB26s45B4mw1QE37W7_Jfhq_LrgGq_Tj7w5P5AI"
        />
        <title>유세지의 식물원</title>
      </head>
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
