import React from "react";

import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { RED_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const RedWines = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("red_wines");

  if (!data.length) return null;

  const { red_wine_description = "" } = drinksHelper || {};

  return (
    <Accordion
      title={RED_WINES}
      expanded={accordionState === RED_WINES}
      onChange={() =>
        setAccordionState((prev) => (prev === RED_WINES ? "" : RED_WINES))
      }
    >
      <div className="table-wrapper">
        {red_wine_description && (
          <p className="dish-note-content">{red_wine_description}</p>
        )}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {data.map((x, i) => {
            return <DisplayMenu name={x.name} price={x.price} key={i} />;
          })}
        </table>
      </div>
    </Accordion>
  );
};

export default RedWines;
