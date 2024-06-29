import React from "react";
import { StyledDiv } from "./style";
import FromTheKitchen from "./components/FromTheKitchen";
import FromTheBar from "./components/FromTheBar";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import namaste from "@/assets/images/namaste.svg";
import menuHelper from "content/settings/menu_list_helper.json";

import ImageWithFallBack from "@/components/ImageWithFallBack";

const KitchenMenu = () => {
  const {
    menu_footer_address = "",
    menu_footer_description = "",
    menu_service_charge_description = "",
  } = menuHelper || {};
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
              {menu_footer_description && (
                <p className="kitchen-content">{menu_footer_description}</p>
              )}

              {menu_footer_address && (
                <p className="kitchen-location">{menu_footer_address}</p>
              )}

              {menu_service_charge_description && (
                <p className="kitchen-service-charge">
                  {menu_service_charge_description}
                </p>
              )}

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
