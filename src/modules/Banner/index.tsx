import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StyledDiv } from "./style";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import Button from "@/components/Button";

const Banner = () => (
  <StyledDiv>
    <Container className="container-wrapper">
      <Row>
        <Col>
          <div className="hero-banner-wrapper">
            <div className="hero-banner-content">
              <ImageWithFallBack
                className="namaste"
                src="/images/namaste.svg"
                alt="Namaste from himalayan sherpa kitchen"
              />
              <p className="hero-banner-content-text">
                We offer you a hearty welcome to the exotic flavors of the
                Himalayan cuisine! Your taste is our specialty and your pleasure
                our courtesy.
              </p>
            </div>
            <div className="hero-banner-content-wrapper">
              <ul>
                <li>
                  <strong>Hours:</strong>
                  <p>Open daily</p>
                </li>
                <li className="show-border">
                  <strong>Lunch: 11:30am to 3:00pm</strong>
                  <p>Last tables seated at 2:45pm</p>
                </li>
                <li className="show-border">
                  <strong>Dinner: 5:00pm to 9:00pm</strong>
                  <p>Last tables seated at 8:30pm</p>
                </li>
              </ul>
              <ul className="actions vertical">
                <li>
                  <Button href="tel:1-707-963-4439" skin="contained" size="md">
                    (707) 963-4439
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
                {/* <li>
                  <a
                    href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon alt fa-yelp"
                  >
                    <span className="label">Yelp</span>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImageWithFallBack src="/images/4star.png" alt="yelp" />
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
