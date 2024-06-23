import React from "react";
import heroBanner from "@/assets/images/hero-banner-image.jpeg";
import Card from "@/components/Card";
import { StyledDiv } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";

const data = [
  {
    imgURL: heroBanner,
    alt: "Mount Everest Trekking",
    content:
      "2018 Trekkers en route Mt. Everest Base Camp organized by the owner, Chiring Sherpa. Chiring leads a trip to Nepal every year. Tourists enjoy and fully immerse in the local culture and natural beauty along the route.",
    href: "/everest-trek",
  },
  {
    imgURL: heroBanner,
    alt: "Mount Everest Trekking",
    content:
      "2018 Trekkers en route Mt. Everest Base Camp organized by the owner, Chiring Sherpa. Chiring leads a trip to Nepal every year. Tourists enjoy and fully immerse in the local culture and natural beauty along the route.",
    href: "/everest-trek",
  },
  {
    imgURL: heroBanner,
    alt: "Mount Everest Trekking",
    content:
      "2018 Trekkers en route Mt. Everest Base Camp organized by the owner, Chiring Sherpa. Chiring leads a trip to Nepal every year. Tourists enjoy and fully immerse in the local culture and natural beauty along the route.",
    href: "/everest-trek",
  },
  {
    imgURL: heroBanner,
    alt: "Mount Everest Trekking",
    content:
      "2018 Trekkers en route Mt. Everest Base Camp organized by the owner, Chiring Sherpa. Chiring leads a trip to Nepal every year. Tourists enjoy and fully immerse in the local culture and natural beauty along the route.",
    href: "/everest-trek",
  },
  {
    imgURL: heroBanner,
    alt: "Mount Everest Trekking",
    content:
      "2018 Trekkers en route Mt. Everest Base Camp organized by the owner, Chiring Sherpa. Chiring leads a trip to Nepal every year. Tourists enjoy and fully immerse in the local culture and natural beauty along the route.",
    href: "/everest-trek",
  },
];

const ShowCaseList = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <h2 className="section-title show-case-title">
              Everest Base Camp Trek
            </h2>
            <div className="show-case-card-container">
              {data.map((x, i) => {
                return (
                  <Card
                    alt={x.alt}
                    imgURL={x.imgURL}
                    href={x.href}
                    content={x.content}
                    key={i}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default ShowCaseList;
