import { MarkDownContentTypes } from "@/types/mark-down-content.types";
import { getMarkDownDataConversion } from "@/utils/convert-mark-down-data";
import { graphql, useStaticQuery } from "gatsby";

const useAllMarkdownData = (fileName: string): Array<MarkDownContentTypes> => {
  // const resp = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: { name: { eq: footer_text } }) {
  //       edges {
  //         node {
  //           childMarkdownRemark {
  //             frontmatter {
  //               title
  //             }
  //             html
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const allMarkDownData = resp.allMarkdownRemark.edges;

  // const collectionRegex = new RegExp(`/${collectionName}/`, "i");

  // const filteredData = allMarkDownData.filter(({ node }: any) =>
  //   collectionRegex.test(node.fileAbsolutePath)
  // );

  // return getMarkDownDataConversion(filteredData);

  return [];
};

export default useAllMarkdownData;
