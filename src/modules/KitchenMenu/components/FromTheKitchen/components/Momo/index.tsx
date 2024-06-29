import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { MOMO_STEAMED } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Momo = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("momo");

  if (!data.length) return null;

  const { momo_description = "" } = menuHelper || {};

  return (
    <Accordion
      title={MOMO_STEAMED}
      expanded={accordionState === MOMO_STEAMED}
      onChange={() =>
        setAccordionState((prev) => (prev === MOMO_STEAMED ? "" : MOMO_STEAMED))
      }
    >
      <div className="table-wrapper">
        {momo_description && (
          <p className="dish-note-content">{momo_description}</p>
        )}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </Accordion>
  );
};

export default Momo;
