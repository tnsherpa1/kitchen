declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

type GraphQlMarkDownPageType = {
  data: {
    allMarkdownRemark: {
      edges: Array<{ node: { frontmatter: Record<string, string> } }>;
    };
  };
};
