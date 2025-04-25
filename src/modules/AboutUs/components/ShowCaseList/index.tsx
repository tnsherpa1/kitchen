import React from "react";
import Card from "@/components/Card";
import { StyledDiv } from "./style";
import { Container, Row, Col } from "restaurant-ui/components";
import { AboutUsBlogType } from "../../types/about-us-type";
import { Typography } from "restaurant-ui/components";

type Props = {
  data: Array<AboutUsBlogType>;
};
const ShowCaseList = ({ data }: Props) => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <Typography
              as="h2"
              className="section-title show-case-title text-underline"
            >
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
