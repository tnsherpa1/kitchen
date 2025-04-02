import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import settings from "content/everest_base_camp_trek/base_camp.json";
import Typography from "@/components/Typography";
import ReactHtmlParser from "react-html-parser";

const EverestTrek = () => {
  const { description = "", image = "" } = settings || {};

  const formattedDescription = React.useMemo(() => {
    if (!description) return "";

    return description.replace(/\n+/g, "<br>");
  }, [description]);
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="everest-trek-title">
              <Typography as="h1" className="section-title">
                Everest Base Camp Trek
              </Typography>
            </div>

            <div className="everest-trek-achievement-wrapper">
              <div className="achievement-image-wrapper">
                <ImageWithFallBack src={image} alt="Everest Trek Info" />
              </div>

              {formattedDescription && (
                <div className="achievement-trek-content">
                  <Typography as="p">
                    <i>{ReactHtmlParser(formattedDescription)}</i>
                  </Typography>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default EverestTrek;
