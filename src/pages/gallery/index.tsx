import BaseLayout from "@/layouts/BaseLayout";
import WorkInProgressLayout from "@/layouts/WorkInProgressLayout";
import Gallery from "@/modules/Gallery";
import { graphql } from "gatsby";
import React from "react";

const GalleryPage = ({ data }: any) => {
  console.log(data, "@@@");
  return (
    <BaseLayout>
      <Gallery />
    </BaseLayout>
  );
};

export default GalleryPage;

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
          publicURL
        }
      }
    }
  }
`;
