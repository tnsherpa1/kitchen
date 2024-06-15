import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { SIDES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Sides = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("sides");

  if (!data.length) return null;

  return (
    <Accordion
      title={SIDES}
      expanded={accordionState === SIDES}
      onChange={() =>
        setAccordionState((prev) => (prev === SIDES ? "" : SIDES))
      }
    >
      <div className="table-wrapper">
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

export default Sides;
