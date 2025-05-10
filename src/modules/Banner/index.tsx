import React from "react";
import {
  ImageWithFallBack,
  Container,
  Row,
  Col,
  Typography,
} from "restaurant-ui/components";
import Button from "@/components/Button";
import namaste from "@/assets/images/namaste.svg";
import star from "@/assets/images/4star.png";
import settings from "content/settings/settings.json";
import yelp from "@/assets/images/yelp-brands-solid.svg";
import { StyledDiv } from "./style";

const Banner = () => {
  const {
    hero_banner_text = "",
    lunch_time = "",
    lunch_last_seated_time = "",
    dinner_time = "",
    dinner_last_seated_time = "",
    phone_number = "",
    yelp_link = "",
  } = settings || {};
  return (
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
                <Typography as="subtitle1" className="hero-banner-content-text">
                  {hero_banner_text}
                </Typography>
              </div>
              <div className="hero-banner-content-wrapper">
                <ul>
                  <li>
                    <strong>Hours:</strong>
                    <Typography as="subtitle1">Open daily</Typography>
                  </li>
                  <li className="show-border">
                    <strong>Lunch: {lunch_time}</strong>
                    <Typography as="subtitle1">
                      Last tables seated at {lunch_last_seated_time}
                    </Typography>
                  </li>
                  <li className="show-border">
                    <strong>Dinner: {dinner_time}</strong>
                    <Typography as="subtitle1">
                      Last tables seated at {dinner_last_seated_time}
                    </Typography>
                  </li>
                </ul>
                <ul className="button-group">
                  {phone_number && (
                    <li>
                      <Button
                        href={`tel:${phone_number}`}
                        skin="contained"
                        size="md"
                      >
                        {phone_number}
                      </Button>
                    </li>
                  )}
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
                {yelp_link && (
                  <ul className="icons">
                    <li>
                      <a
                        href={yelp_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="yelp-wrapper"
                      >
                        <ImageWithFallBack src={yelp} alt="yelp" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={yelp_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ImageWithFallBack src={star} alt="yelp" />
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Banner;
