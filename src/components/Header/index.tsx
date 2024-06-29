import React from "react";
import { Link } from "gatsby";

import { StyledDiv } from "./style";
import ImageWithFallBack from "../ImageWithFallBack";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import HamburgerMenuIcon from "../HamburgerIcon";
import Drawer from "../Drawer";
import clsx from "clsx";
import logo from "@/assets/images/logo.svg";
import Menu from "../MenuList";
import settings from "#/content/settings/settings.json";

type Props = {
  onToggleMenu: () => void;
};

const Header = ({ onToggleMenu }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);

  React.useEffect(() => {
    const detectScroll = () => {
      setIsHeaderSticky(window.scrollY >= 73);
    };

    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  const { home_page_title = "Himalayan Sherpa Kitchen", site_logo = "" } =
    settings || {};

  return (
    <>
      <StyledDiv
        id="header"
        className={clsx({ sticky: isHeaderSticky, showBoxShadow: !isMenuOpen })}
      >
        <Container fluid>
          <Row>
            <Col>
              <div className="header-wrapper">
                <Link to="/" className="logo-wrapper">
                  <ImageWithFallBack
                    src={site_logo || logo}
                    alt="sherpa kitchen logo"
                  />
                  <strong className="logo-title">{home_page_title}</strong>
                </Link>
                <nav
                  className="menu-wrapper"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <div className="menu-link" onClick={onToggleMenu}>
                    Menu
                  </div>
                  <HamburgerMenuIcon isMenuOpen={isMenuOpen} />
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledDiv>
      <Drawer
        className="search-drawer"
        title=""
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        width="100%"
        size="fullscreen"
        position="top"
        drawerZindex={9}
        overlayZindex={5}
        drawerType="custom"
      >
        <Menu />
      </Drawer>
    </>
  );
};

export default Header;
