import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { CURRY_DISHES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Curry = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("curry_dishes");

  if (!data.length) return null;

  return (
    <Accordion
      title={CURRY_DISHES}
      expanded={accordionState === CURRY_DISHES}
      onChange={() =>
        setAccordionState((prev) => (prev === CURRY_DISHES ? "" : CURRY_DISHES))
      }
    >
      <div className="table-wrapper">
        <p className="dish-note-content">
          Served with a choice of steamed Basmati or Brown Rice
        </p>

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

export default Curry;
