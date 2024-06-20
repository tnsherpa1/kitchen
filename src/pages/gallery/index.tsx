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
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
