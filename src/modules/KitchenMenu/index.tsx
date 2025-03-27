import React from "react";
import { StyledDiv } from "./style";
import FromTheKitchen from "./components/FromTheKitchen";
import FromTheBar from "./components/FromTheBar";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import namaste from "@/assets/images/namaste.svg";
import menuHelper from "content/settings/menu_list_helper.json";
import ReactHtmlParser from "react-html-parser";

import ImageWithFallBack from "@/components/ImageWithFallBack";
import Typography from "@/components/Typography";

const KitchenMenu = () => {
  const {
    menu_footer_address = "",
    menu_footer_description = "",
    menu_service_charge_description = "",
  } = menuHelper || {};

  const formattedAddress = React.useMemo(() => {
    if (!menu_footer_address) return "";

    return menu_footer_address.replace(/\n+/g, "<br>");
  }, [menu_footer_address]);

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <header className="major section-title">
              <Typography as="h1" className="section-title">
                Menu
              </Typography>
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
                <Typography as="p" className="kitchen-content">
                  {menu_footer_description}
                </Typography>
              )}

              {formattedAddress && (
                <Typography as="p" className="kitchen-location">
                  {ReactHtmlParser(formattedAddress)}
                </Typography>
              )}

              {menu_service_charge_description && (
                <Typography as="p" className="kitchen-service-charge">
                  {menu_service_charge_description}
                </Typography>
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
