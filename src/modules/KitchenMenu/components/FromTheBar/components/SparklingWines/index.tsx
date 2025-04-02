import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { SPARKLING_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const SparklingWines = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("sparkling_wines");

  if (!data.length) return null;

  const { sparkling_wine_description } = drinksHelper || {};

  return (
    <Accordion
      title={SPARKLING_WINES}
      expanded={accordionState === SPARKLING_WINES}
      onChange={() =>
        setAccordionState((prev) =>
          prev === SPARKLING_WINES ? "" : SPARKLING_WINES
        )
      }
    >
      <div className="table-wrapper">
        {sparkling_wine_description && (
          <p className="dish-note-content">{sparkling_wine_description}</p>
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

export default SparklingWines;
