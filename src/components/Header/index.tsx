import React from "react";
import { Link } from "gatsby";

import { StyledDiv } from "./style";
import ImageWithFallBack from "../ImageWithFallBack";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import HamburgerMenuIcon from "../HamburgerIcon";
import Drawer from "../Drawer";
import MenuDrawer from "@/modules/MenuDrawer";
import clsx from "clsx";
import logo from "@/assets/images/logo.svg";
import Menu from "../MenuList";

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
                  <ImageWithFallBack src={logo} alt="sherpa kitchen logo" />
                  <strong className="logo-title">
                    Himalayan Sherpa Kitchen
                  </strong>
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
        {/* <MenuDrawer /> */}
        <Menu />
      </Drawer>
    </>
  );
};

export default Header;
