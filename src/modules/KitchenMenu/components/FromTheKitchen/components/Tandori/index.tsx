import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { TANDOORI } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Tandori = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("tandoori");

  if (!data.length) return null;

  const { tandoori_description = "" } = menuHelper || {};

  return (
    <Accordion
      title={TANDOORI}
      expanded={accordionState === TANDOORI}
      onChange={() =>
        setAccordionState((prev) => (prev === TANDOORI ? "" : TANDOORI))
      }
    >
      <div className="table-wrapper">
        {tandoori_description && (
          <p className="dish-note-content">{tandoori_description}</p>
        )}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          {data.map((x, i) => {
            return (
              <DisplayMenu
                name={x.name}
                desc={x.description}
                price={x.price}
                key={i}
              />
            );
          })}
        </table>
      </div>
    </Accordion>
  );
};

export default Tandori;
