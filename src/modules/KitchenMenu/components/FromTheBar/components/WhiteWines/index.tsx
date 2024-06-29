import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { WHITE_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const WhiteWines = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("white_wines");

  if (!data.length) return null;

  const { white_wine_description } = drinksHelper || {};

  return (
    <Accordion
      title={WHITE_WINES}
      expanded={accordionState === WHITE_WINES}
      onChange={() =>
        setAccordionState((prev) => (prev === WHITE_WINES ? "" : WHITE_WINES))
      }
    >
      <div className="table-wrapper">
        {white_wine_description && (
          <p className="dish-note-content">{white_wine_description}</p>
        )}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, i) => {
              return <DisplayMenu name={x.name} price={x.price} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </Accordion>
  );
};

export default WhiteWines;
