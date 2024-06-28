import React from "react";
import { StyledDiv } from "./style";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import Button from "@/components/Button";
import namaste from "@/assets/images/namaste.svg";
import star from "@/assets/images/4star.png";
import {
  hero_banner_text,
  lunch_time,
  lunch_last_seated_time,
  dinner_time,
  dinner_last_seated_time,
  phone_number,
} from "#/content/settings/settings.json";

const Banner = () => (
  <StyledDiv>
    <Container className="container-wrapper">
      <Row>
        <Col>
          <div className="hero-banner-wrapper">
            <div className="hero-banner-content">
              <ImageWithFallBack
                className="namaste"
                src={namaste}
                alt="Namaste from himalayan sherpa kitchen"
              />
              <p className="hero-banner-content-text">{hero_banner_text}</p>
            </div>
            <div className="hero-banner-content-wrapper">
              <ul>
                <li>
                  <strong>Hours:</strong>
                  <p>Open daily</p>
                </li>
                <li className="show-border">
                  <strong>Lunch: {lunch_time}</strong>
                  <p>Last tables seated at {lunch_last_seated_time}</p>
                </li>
                <li className="show-border">
                  <strong>Dinner: {dinner_time}</strong>
                  <p>Last tables seated at {dinner_last_seated_time}</p>
                </li>
              </ul>
              <ul className="button-group">
                <li>
                  <Button
                    href={`tel:${phone_number}`}
                    skin="contained"
                    size="md"
                  >
                    {phone_number}
                  </Button>
                </li>
                <li>
                  <Button
                    href="/menu"
                    skin="outline"
                    className="letter-spacing"
                    size="md"
                  >
                    VIEW THE MENU
                  </Button>
                </li>
              </ul>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImageWithFallBack src={star} alt="yelp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </StyledDiv>
);

export default Banner;
