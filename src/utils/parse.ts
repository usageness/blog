export const parseDocument = (id: number, rawString: string) => {
  const documentData = rawString.split('<hr>');
  const splitByTitle = documentData[1].split('title: ');
  const splitBySubTitle = splitByTitle[1].split('\nsubTitle: ');
  const splitByDate = splitBySubTitle[1].split('\ndate: ');
  const splitByPtag = splitByDate[1].split('</p>\n');

  return {
    id,
    title: splitBySubTitle[0],
    subTitle: splitByDate[0],
    date: splitByPtag[0],
    content: documentData[2],
  };
};
