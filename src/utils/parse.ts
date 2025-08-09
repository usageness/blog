export const parseDocument = (id: number, rawString: string) => {
  const documentData = rawString.split('<hr>');
  const splitByTitle = documentData[1].split('title: ');
  const splitBySubTitle = splitByTitle[1].split('subTitle: ');
  const splitByDate = splitBySubTitle[1].split('date: ');
  const splitByPtag = splitByDate[1].split('</p>');
  let content = documentData.slice(2).join('<hr>');

  /** 네비게이션 파싱 */
  let lastTextIndex = 0;
  const headTextArray = [];

  while (true) {
    const tagStartPosition = content.indexOf('<h', lastTextIndex);
    if (tagStartPosition === -1) break;

    const headTagDepth = Number(content[tagStartPosition + 2]);
    const textStartPosition = content.indexOf('>', tagStartPosition + 4);
    let textEndPosition = content.indexOf('</h', textStartPosition + 1);
    let parsedHeadText = content.substring(
      textStartPosition + 1,
      textEndPosition,
    );

    // 따옴표 처리
    parsedHeadText = parsedHeadText.replace(/&#39;/g, "'");
    parsedHeadText = parsedHeadText.replace(/&quot;/g, '"');

    const parsedId = getDOMAnchorId(parsedHeadText);
    headTextArray.push({ parsedHeadText, parsedId, depth: headTagDepth });

    // h 태그 classname 처리
    const emptyPosition = content.indexOf(' ', tagStartPosition);
    content =
      content.substring(0, emptyPosition) +
      ' class="content-heading" ' +
      content.substring(emptyPosition + 1);

    textEndPosition = content.indexOf('</h', textStartPosition + 1);
    lastTextIndex = textEndPosition + 5;
  }

  return {
    id,
    title: splitBySubTitle[0],
    subTitle: splitByDate[0],
    date: splitByPtag[0],
    content: content,
    navigator: headTextArray,
  };
};

export const getDOMAnchorId = (parsedHeadText: string) => {
  parsedHeadText = parsedHeadText.replace(/[.,/#!$%^&*;:{}=_`'"~?]/g, '');
  parsedHeadText = parsedHeadText.replace(/\s/g, '-');

  parsedHeadText = parsedHeadText.toLowerCase();
  return parsedHeadText;
};
