import React from "react";
import { StyledDiv } from "./style";
import Beer from "./components/Beer";
import Beverages from "./components/Beverages";
import RedWines from "./components/RedWines";
import SparklingWines from "./components/SparklingWines";
import WhiteWines from "./components/WhiteWines";

const FromTheBar = () => {
  const [accordionState, setAccordionState] = React.useState("");

  return (
    <StyledDiv>
      <h3 className="kitchen-menu-title"> From the Bar:</h3>
      <Beer
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <Beverages
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <RedWines
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <SparklingWines
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
      <WhiteWines
        accordionState={accordionState}
        setAccordionState={setAccordionState}
      />
    </StyledDiv>
  );
};

export default FromTheBar;
