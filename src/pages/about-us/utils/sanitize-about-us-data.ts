export const sanitizeAboutUsData = ({ data }: GraphQlMarkDownPageType) => {
  const { edges = [] } = data?.allMarkdownRemark || {};

  if (!Array.isArray(edges) || !edges.length) return [];

  return edges.reduce((acc: Array<Record<string, string>>, iterator) => {
    const { frontmatter = null } = iterator?.node || {};

    if (!frontmatter) return acc;

    return [...acc, frontmatter];
  }, []);
};
