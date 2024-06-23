import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";

import img1 from "@/assets/images/gallery-image/himalayas-st-helena.jpg";
import img2 from "@/assets/images/gallery-image/indian-cuisine-st-helena.jpg";
import img3 from "@/assets/images/gallery-image/indian-restaurant-st-helena.jpg";
import img4 from "@/assets/images/gallery-image/sherpa-kitchen-st-helena.jpg";
import ImageLightbox from "@/components/ImageLightBox";
import { getLightBoxImage } from "./utils/get-light-box-image";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import ImageList from "./components/ImageList";

const photos = [
  {
    imageSrc:
      "https://s3-media1.fl.yelpcdn.com/bphoto/3KyvtBP1_rmd1_BOMT_vSQ/o.jpg",
  },
  {
    imageSrc: img2,
  },
  {
    imageSrc: img3,
  },
  {
    imageSrc: img4,
  },
  {
    imageSrc:
      "https://s3-media1.fl.yelpcdn.com/bphoto/TDZ2ZoVt7_NvJ_f5SDlBxw/o.jpg",
  },
  {
    imageSrc:
      "https://s3-media3.fl.yelpcdn.com/bphoto/mNFm-YakbeAmYMKJILhJcQ/o.jpg",
  },
  {
    imageSrc:
      "https://s3-media1.fl.yelpcdn.com/bphoto/FTMcVRuKFxMzNvcX5RiJhQ/o.jpg",
  },
  {
    imageSrc:
      "https://s3-media1.fl.yelpcdn.com/bphoto/-jRR2FLrBdWoGyKUE7nf3Q/o.jpg",
  },
  {
    imageSrc: img1,
  },
  {
    imageSrc:
      "https://s3-media1.fl.yelpcdn.com/bphoto/S638kgrBbOzMG3N33pEL-g/o.jpg",
  },
  {
    imageSrc:
      "https://s3-media1.fl.yelpcdn.com/bphoto/TNxLdQJ33_7E7m2h50UjLA/o.jpg",
  },
  {
    imageSrc:
      "https://s3-media4.fl.yelpcdn.com/bphoto/88kXqhkAnUPlNonj_IC-CA/o.jpg",
  },
];

type Props = {
  data: Array<{ imageSrc: string }>;
};

const Gallery = ({ data }: Props) => {
  const [index, setIndex] = React.useState<number | null>(null);

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
                {data?.map((x, i) => {
                  if (!x.imageSrc) return;

                  return (
                    <ImageList
                      imageUrl={x.imageSrc}
                      key={i}
                      onClick={() => setIndex(i)}
                    />
                  );
                })}

                <ImageLightbox
                  images={getLightBoxImage(data)}
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
