export const sanitizeGalleryImage = ({ data }: GraphQlMarkDownPageType) => {
  const { edges = [] } = data?.allMarkdownRemark || {};

  if (!Array.isArray(edges) || !edges.length) return [];

  return edges.reduce((acc: Array<{ src: string }>, iterator) => {
    const { image = "" } = iterator?.node?.frontmatter || {};

    if (!image) {
      return acc;
    }

    return [...acc, { src: image }];
  }, []);
};
