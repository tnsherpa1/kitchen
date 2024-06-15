import React from "react";
import { StyledDiv } from "./style";
import FromTheKitchen from "./components/FromTheKitchen";
import FromTheBar from "./components/FromTheBar";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import namaste from "@/assets/images/namaste.svg";

import ImageWithFallBack from "@/components/ImageWithFallBack";

const KitchenMenu = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <header className="major section-title">
              <h1>Menu</h1>
            </header>

            <div className="kitchen-menu-wrapper">
              <FromTheKitchen />
              <FromTheBar />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="kitchen-information-wrapper">
              <p className="kitchen-content">
                We offer you a hearty welcome to the exotic flavors of the
                Himalayan cuisine! Your taste is our specialty and your pleasure
                our courtesy. (v) Indicates Vegan dishes Due to California
                statewide water restrictions, water service is offered by
                request only.
              </p>

              <p className="kitchen-location">
                <span> 1148 Main Street,</span>
                <span> St. Helena, CA 94574</span>
                <span> Phone: (707) 963-4439</span>
              </p>

              <p className="kitchen-service-charge">
                18% Service Charge may be added to parties of 6 or more Take out
                orders and catering available for private events Thank you for
                dining with us. See you soon!
              </p>

              <div className="kitchen-service-logo">
                <ImageWithFallBack src={namaste} alt="sherpa kitchen logo" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default KitchenMenu;
