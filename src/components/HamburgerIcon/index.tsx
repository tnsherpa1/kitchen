import React from "react";

import clsx from "clsx";
import { StyledDiv } from "./style";

type Props = {
  isMenuOpen: boolean;
};

const HamburgerMenuIcon = ({ isMenuOpen }: Props) => {
  return (
    <StyledDiv
      className={clsx("hamburgerMenu action", {
        "is-active": isMenuOpen,
      })}
    >
      <span />
      <span />
      <span />
    </StyledDiv>
  );
};

export default HamburgerMenuIcon;
