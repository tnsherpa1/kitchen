import React from "react";
import { StyledSection } from "./style";
import { Container, Row, Col } from "restaurant-ui/components";
import Button from "../Button";
import settings from "content/settings/settings.json";
import { Typography } from "restaurant-ui/components";

const OurStory = () => {
  const { story_content = "" } = settings || {};
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="our-story-wrapper">
              <Typography
                as="h2"
                className="section-title our-story-title text-underline"
              >
                The Story
              </Typography>
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
