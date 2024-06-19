import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";

import img1 from "@/assets/images/gallery-image/himalayas-st-helena.jpg";
import img2 from "@/assets/images/gallery-image/indian-cuisine-st-helena.jpg";
import img3 from "@/assets/images/gallery-image/indian-restaurant-st-helena.jpg";
import img4 from "@/assets/images/gallery-image/sherpa-kitchen-st-helena.jpg";
// import ImageList from "./components/ImageList";
import ImageLightbox from "@/components/ImageLightBox";
import { getLightBoxImage } from "./utils/get-light-box-image";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const photos = [
  {
    src: "https://s3-media1.fl.yelpcdn.com/bphoto/3KyvtBP1_rmd1_BOMT_vSQ/o.jpg",
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: "https://s3-media1.fl.yelpcdn.com/bphoto/TDZ2ZoVt7_NvJ_f5SDlBxw/o.jpg",
  },
  {
    src: "https://s3-media3.fl.yelpcdn.com/bphoto/mNFm-YakbeAmYMKJILhJcQ/o.jpg",
  },
  {
    src: "https://s3-media1.fl.yelpcdn.com/bphoto/FTMcVRuKFxMzNvcX5RiJhQ/o.jpg",
  },
  {
    src: "https://s3-media1.fl.yelpcdn.com/bphoto/-jRR2FLrBdWoGyKUE7nf3Q/o.jpg",
  },
  {
    src: img1,
  },
  {
    src: "https://s3-media1.fl.yelpcdn.com/bphoto/S638kgrBbOzMG3N33pEL-g/o.jpg",
  },
  {
    src: "https://s3-media1.fl.yelpcdn.com/bphoto/TNxLdQJ33_7E7m2h50UjLA/o.jpg",
  },
  {
    src: "https://s3-media4.fl.yelpcdn.com/bphoto/88kXqhkAnUPlNonj_IC-CA/o.jpg",
  },
];

const Gallery = ({ data }) => {
  const [index, setIndex] = React.useState<number | null>(null);
  // const data = useAllMarkdownData("gallery");

  console.log({ data }, "@@@@");

  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="gallery-wrapper">
              <div className="gallery-wrapper">
                <h1 className="section-title gallery-title">Gallery</h1>
              </div>

              <div className="gallery-image-wrapper">
                {data?.map((x: any, i) => {
                  if (!x.image) return;

                  // console.log({ test: getImage(x.image) }, "@@@");
                  return (
                    // <GatsbyImage
                    //   // image={getImage(x.image)}
                    //   key={i}
                    //   onClick={() => setIndex(i)}
                    // />
                    <ImageWithFallBack src={x.image} key={i} alt="asdad" />
                  );
                })}

                <ImageLightbox
                  images={getLightBoxImage(photos)}
                  index={index as number}
                  setIndex={setIndex}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Gallery;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "gallery" } } }
    ) {
      nodes {
        frontmatter {
          name
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
