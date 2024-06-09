import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { StyledDiv } from "./style";

type Props = {
  onToggleMenu: () => void;
};

const Header = ({ onToggleMenu }: Props) => (
  <StyledDiv id="header" className="alt">
    <Link to="/" className="logo">
      <StaticImage src="/images/logo.svg" alt="sherpa kitchen logo" />
      <strong>Himalayan Sherpa Kitchen</strong>
    </Link>
    <nav>
      <button className="menu-link" onClick={onToggleMenu}>
        Menu
      </button>
    </nav>
  </StyledDiv>
);

export default Header;
