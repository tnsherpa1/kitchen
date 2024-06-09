import React from "react";
import Starter from "./components/Starter";
import Momo from "./components/Momo";
import Curry from "./components/Curry";
import Tandori from "./components/Tandori";
import TikaMasala from "./components/TikaMasala";
import Sides from "./components/Sides";

const Menu = () => {
  return (
    <div id="menu">
      <header className="major">
        <h1>Menu</h1>
      </header>
      <h3 className="align-center">From the kitchen:</h3>
      <Starter />
      <Momo />
      <Curry />
      <Tandori />
      <TikaMasala />
      <Sides />
      <hr />
    </div>
  );
};

export default Menu;
