import React from "react";
import { StyledSection } from "./style";
import { Container, Row, Col, Typography } from "restaurant-ui/components";
import ExperienceContentBox from "./components/ExprienceContentBox";

const data = [
  {
    title: "Great Hospitality",
    content:
      "At St. Helena Sherpa Kitchen, we're committed to provide the best possible experience to our customers.",
  },
  {
    title: "Highest Quality Ingredients",
    content:
      "We only source the best quality ingredients. Our ingredients are vastly sourced from local produce in the area.",
  },
  {
    title: "Parties and Events",
    content:
      " We are delighted to bring the Himalayan Sherpa Kitchen experience to any of your private parties and events.",
  },

  {
    title: "Everest Base Camp Trek",
    content:
      "Learn more about this amazing seasonal trek to Everest base camp organized by the owner, Chiring Sherpa",
  },
];

const Experience = () => {
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="exprience-wrapper">
              <Typography
                as="h1"
                className="experience-title section-title"
                color="#fff"
              >
                Kitchen + Experience
              </Typography>

              <div className="expreience-content-box-wrapper">
                {data.map((item, i) => {
                  return (
                    <ExperienceContentBox
                      title={item.title}
                      content={item.content}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Experience;
