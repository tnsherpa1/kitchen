import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";

import ImageLightbox from "@/components/ImageLightBox";
import { getLightBoxImage } from "./utils/get-light-box-image";
import ImageList from "./components/ImageList";
import Typography from "@/components/Typography";

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
                <Typography as="h1" className="section-title gallery-title">
                  Gallery
                </Typography>
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
