import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { TIKA_MASALA } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const TikaMasala = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("tika_masala");

  if (!data.length) return null;

  const { tika_masala_description = "" } = menuHelper || {};

  return (
    <Accordion
      title={TIKA_MASALA}
      expanded={accordionState === TIKA_MASALA}
      onChange={() =>
        setAccordionState((prev) => (prev === TIKA_MASALA ? "" : TIKA_MASALA))
      }
    >
      <div className="table-wrapper">
        {tika_masala_description && (
          <p className="dish-note-content">{tika_masala_description}</p>
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

export default TikaMasala;
