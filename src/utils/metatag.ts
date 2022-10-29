export const setMetaTags = (title: string, description: string) => {
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute('content', title);
  document
    .querySelector('meta[property="twitter:title"]')
    ?.setAttribute('content', title);
  document
    .querySelector('meta[name="og:description"]')
    ?.setAttribute('content', description);
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute('content', description);
};
