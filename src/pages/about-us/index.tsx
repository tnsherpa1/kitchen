import BaseLayout from "@/layouts/BaseLayout";
import WorkInProgressLayout from "@/layouts/WorkInProgressLayout";
import AboutUs from "@/modules/AboutUs";
import { AboutUsBlogType } from "@/modules/AboutUs/types/about-us-type";
import sanitizeAboutUsData from "@/modules/AboutUs/utils/sanitize-about-us-data";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const AboutPage = ({ data }: GraphQlMarkDownPageType) => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Himalayan Sherpa Kitchen - St. Helena</title>
        <meta name="description" content="Landing Page" />
      </Helmet>
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
