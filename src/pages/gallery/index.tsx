import {
  Col,
  Container,
  ImageGallery,
  Row,
  Seo,
  Typography,
} from "restaurant-ui/components";
import BaseLayout from "@/layouts/BaseLayout";
import { graphql } from "gatsby";
import React from "react";
import "react-image-lightbox/style.css";
import seo from "content/seo/gallery-page-seo.json";
import StyledSection from "./style";
import { sanitizeGalleryImage } from "@/utils/sanitize-gallery-image";

const GalleryPage = ({ data }: GraphQlMarkDownPageType) => {
  return (
    <BaseLayout>
      <Seo {...seo} />
      <StyledSection>
        <Container>
          <Row>
            <Col>
              <Typography as="h1" className="gallery-title">
                Gallery
              </Typography>
            </Col>
          </Row>
        </Container>
        <ImageGallery imageData={sanitizeGalleryImage({ data })} />
      </StyledSection>
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
