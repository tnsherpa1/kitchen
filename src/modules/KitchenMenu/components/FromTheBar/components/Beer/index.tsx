import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { BEER } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Beer = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("beer");

  if (!data.length) return null;

  const { beer_description } = drinksHelper || {};

  return (
    <Accordion
      title={BEER}
      expanded={accordionState === BEER}
      onChange={() => setAccordionState((prev) => (prev === BEER ? "" : BEER))}
    >
      <div className="table-wrapper">
        {beer_description && (
          <p className="dish-note-content">{beer_description}</p>
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
              return (
                <DisplayMenu
                  name={x.name}
                  price={x.price}
                  key={i}
                  showDescription={false}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </Accordion>
  );
};

export default Beer;
