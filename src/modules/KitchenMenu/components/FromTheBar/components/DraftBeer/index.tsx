import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { DRAFT_BEER } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const DraftBeer = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("draft_beer");

  if (!data.length) return null;

  const { draftbeer_description } = drinksHelper || {};

  return (
    <Accordion
      title={DRAFT_BEER}
      expanded={accordionState === DRAFT_BEER}
      onChange={() =>
        setAccordionState((prev) => (prev === DRAFT_BEER ? "" : DRAFT_BEER))
      }
    >
      <div className="table-wrapper">
        {draftbeer_description && (
          <p className="dish-note-content">{draftbeer_description}</p>
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

export default DraftBeer;
