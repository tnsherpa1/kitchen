import Seo from "@/components/Seo";
import BaseLayout from "@/layouts/BaseLayout";
import Gallery from "@/modules/Gallery";
import { sanitizeGalleryImage } from "@/modules/Gallery/utils/sanitize-gallery-image";
import { graphql } from "gatsby";
import React from "react";
import seo from "content/seo/gallery-page-seo.json";

const GalleryPage = ({ data }: GraphQlMarkDownPageType) => {
  return (
    <BaseLayout>
      <Seo {...seo} />
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
