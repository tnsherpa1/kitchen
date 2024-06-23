import BaseLayout from "@/layouts/BaseLayout";
import WorkInProgressLayout from "@/layouts/WorkInProgressLayout";
import AboutUs from "@/modules/AboutUs";
import { graphql } from "gatsby";
import React from "react";
import { sanitizeAboutUsData } from "./utils/sanitize-about-us-data";
import { AboutUsBlogType } from "./types/about-us-type";

const AboutPage = ({ data }: GraphQlMarkDownPageType) => {
  console.log(data, "@@@@");
  return (
    <BaseLayout>
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
