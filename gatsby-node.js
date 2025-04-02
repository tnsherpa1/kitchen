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
        name: String
        description: String
        price: String
        
      }
    `;
  createTypes(typeDefs);
};
