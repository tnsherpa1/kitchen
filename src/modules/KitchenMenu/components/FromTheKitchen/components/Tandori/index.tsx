import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { TANDOORI } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Tandori = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("tandoori");

  if (!data.length) return null;

  return (
    <Accordion
      title={TANDOORI}
      expanded={accordionState === TANDOORI}
      onChange={() =>
        setAccordionState((prev) => (prev === TANDOORI ? "" : TANDOORI))
      }
    >
      <div className="table-wrapper">
        <p className="dish-note-content">
          (Sizzling Platters)
          <br />
          Marinated in yogurt and Himalayan spices and broiled in the tandoor
          oven, served sizzling on a bed of onions and bell peppers with fresh
          spinach topping.
          <br />
          All Tandoori items served with a choice of Steamed Basmati or Brown
          rice.
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

export default Tandori;
