exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
      type MarkdownRemark implements Node {
        id: ID!
        fileAbsolutePath: String
        frontmatter: Frontmatter
        html: String
      }
  
      type Frontmatter {
        title: String!
        description: String
        image: String
        ingredients: [String]
        instructions: String
      }
    `;
  createTypes(typeDefs);
};
