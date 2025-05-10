import React from "react";
import { StyledSection } from "./style";
import {
  ImageWithFallBack,
  Container,
  Row,
  Col,
  Typography,
} from "restaurant-ui/components";
import settings from "content/everest_base_camp_trek/base_camp.json";
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
            <Typography
              as="h1"
              className="section-title everest-trek-title text-underline"
            >
              Everest Base Camp Trek
            </Typography>

            <div className="everest-trek-achievement-wrapper">
              <div className="achievement-image-wrapper">
                <ImageWithFallBack src={image} alt="Everest Trek Info" />
              </div>

              {formattedDescription && (
                <div className="achievement-trek-content">
                  <Typography as="p" className="trek-content">
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
