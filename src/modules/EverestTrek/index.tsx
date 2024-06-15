import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import trekInfo from "@/assets/images/everest-trek-info.jpeg";

const EverestTrek = () => {
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="everest-trek-title section-title">
              <h1>Everest Base Camp Trek</h1>
            </div>

            <div className="everest-trek-achievement-wrapper">
              <div className="achievement-image-wrapper">
                <ImageWithFallBack src={trekInfo} alt="Everest Trek Info" />
              </div>

              <div className="achievement-trek-content">
                <i>
                  Chiring leads a trip to Nepal every year. Tourists enjoy and
                  fully immerse in the local culture and natural beauty along
                  the route. <br /> For more details, pricing and complete
                  itinerary please call or use the contact form below.
                </i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default EverestTrek;
