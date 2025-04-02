import Seo from "@/components/Seo";
import BaseLayout from "@/layouts/BaseLayout";
import AboutUs from "@/modules/AboutUs";
import { AboutUsBlogType } from "@/modules/AboutUs/types/about-us-type";
import sanitizeAboutUsData from "@/modules/AboutUs/utils/sanitize-about-us-data";
import { graphql } from "gatsby";
import React from "react";
import seo from "content/seo/about-us-seo.json";

const AboutPage = ({ data }: GraphQlMarkDownPageType) => {
  return (
    <BaseLayout>
      <Seo {...seo} />
      <AboutUs data={sanitizeAboutUsData({ data }) as Array<AboutUsBlogType>} />
    </BaseLayout>
  );
};

export default AboutPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            image
            title
            description
          }
        }
      }
    }
  }
`;
