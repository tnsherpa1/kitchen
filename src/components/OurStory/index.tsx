import React from "react";
import { StyledSection } from "./style";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Button from "../Button";
import settings from "content/settings/settings.json";
import Typography from "../Typography";

const OurStory = () => {
  const { story_content = "" } = settings || {};
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="our-story-wrapper">
              <header className="our-story-title">
                <Typography as="h2" className="section-title">
                  The Story
                </Typography>
              </header>
              {story_content && <Typography as="p">{story_content}</Typography>}
              <div className="link-wrapper">
                <Button href="/about-us" skin="outline" size="md">
                  Learn more
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default OurStory;
