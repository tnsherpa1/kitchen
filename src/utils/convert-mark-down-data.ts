import { MarkDownContentTypes } from "@/types/mark-down-content.types";

type markDownData = Array<{
  node: {
    frontmatter: MarkDownContentTypes;
  };
}>;

export const getMarkDownDataConversion = (markDownData: markDownData) => {
  if (!Array.isArray(markDownData) || !markDownData.length) return [];

  return markDownData.reduce((acc: any, iterator) => {
    const { frontmatter } = iterator.node || {};

    return [...acc, frontmatter];
  }, []);
};
