import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { BEVERAGES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Beverages = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("beverages");

  if (!data.length) return null;

  const { beverages_description = "" } = drinksHelper || {};

  return (
    <Accordion
      title={BEVERAGES}
      expanded={accordionState === BEVERAGES}
      onChange={() =>
        setAccordionState((prev) => (prev === BEVERAGES ? "" : BEVERAGES))
      }
    >
      <div className="table-wrapper">
        {beverages_description && (
          <p className="dish-note-content">{beverages_description}</p>
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

export default Beverages;
