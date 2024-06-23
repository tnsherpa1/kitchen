import type { GalleryPageProps } from "@/pages/gallery";

export const sanitizeGalleryImage = ({ data }: GalleryPageProps) => {
  const { edges = [] } = data?.allMarkdownRemark || {};

  if (!Array.isArray(edges) || !edges.length) return [];

  return edges.reduce((acc: Array<{ imageSrc: string }>, iterator) => {
    const { image = "" } = iterator?.node?.frontmatter || {};

    if (!image) {
      return acc;
    }

    return [...acc, { imageSrc: image }];
  }, []);
};
