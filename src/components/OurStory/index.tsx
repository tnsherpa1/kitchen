import React from "react";
import { StyledSection } from "./style";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Button from "../Button";
import { story_content } from "#/content/settings/settings.json";

const OurStory = () => {
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="our-story-wrapper">
              <header className="our-story-title">
                <h2>The Story</h2>
              </header>
              <p className="our-story-description">
                In the late nineties, owners Kam Chhiring moved to California
                {story_content}
              </p>
              <div className="link-wrapper">
                <Button href="/about" skin="outline" size="md">
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
