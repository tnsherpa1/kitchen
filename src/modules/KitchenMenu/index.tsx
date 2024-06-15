import React from "react";
import { StyledDiv } from "./style";
import FromTheKitchen from "./components/FromTheKitchen";
import FromTheBar from "./components/FromTheBar";

const KitchenMenu = () => {
  return (
    <StyledDiv id="menu">
      <header className="major">
        <h1>Menu</h1>
      </header>
      <FromTheKitchen />
      <hr />
      <FromTheBar />
    </StyledDiv>
  );
};

export default KitchenMenu;
