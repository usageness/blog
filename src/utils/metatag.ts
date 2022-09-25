export const setMetaTags = (title: string, description: string) => {
  document
    .querySelector('meta[name="og:title"]')
    .setAttribute('content', title);
  document
    .querySelector('meta[name="og:description"]')
    .setAttribute('content', description);
};
