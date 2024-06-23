import BaseLayout from "@/layouts/BaseLayout";
import Gallery from "@/modules/Gallery";
import { sanitizeGalleryImage } from "@/modules/Gallery/utils/sanitize-gallery-image";
import { graphql } from "gatsby";
import React from "react";

export type GalleryPageProps = {
  data: {
    allMarkdownRemark: {
      edges: Array<{ node: { frontmatter: { image: string } } }>;
    };
  };
};

const GalleryPage = ({ data }: GalleryPageProps) => {
  return (
    <BaseLayout>
      <Gallery data={sanitizeGalleryImage({ data })} />
    </BaseLayout>
  );
};

export default GalleryPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/gallery/" } }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            image
          }
        }
      }
    }
  }
`;
