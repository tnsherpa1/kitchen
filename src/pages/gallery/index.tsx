import BaseLayout from "@/layouts/BaseLayout";
import Gallery from "@/modules/Gallery";
import { sanitizeGalleryImage } from "@/modules/Gallery/utils/sanitize-gallery-image";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const GalleryPage = ({ data }: GraphQlMarkDownPageType) => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Sherpa Kitchen Gallery</title>
        <meta name="description" content="Photo Page" />
      </Helmet>
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
