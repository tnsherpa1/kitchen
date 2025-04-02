import React from "react";
import heroBanner from "@/assets/images/hero-banner-image.jpeg";
import Card from "@/components/Card";
import { StyledDiv } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { AboutUsBlogType } from "../../types/about-us-type";
import Typography from "@/components/Typography";

type Props = {
  data: Array<AboutUsBlogType>;
};
const ShowCaseList = ({ data }: Props) => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <Typography as="h2" className="section-title show-case-title">
              Everest Base Camp Trek
            </Typography>
            <div className="show-case-card-container">
              {data.map((x, i) => {
                return (
                  <Card
                    alt={"card"}
                    imgURL={x.image}
                    href="/everest-trek"
                    content={x.description}
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
