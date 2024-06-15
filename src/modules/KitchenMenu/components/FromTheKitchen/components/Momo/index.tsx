import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { MOMO_STEAMED } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "Veggie Momo",
    desc: "Steamed dumplings filled w/spinach, onion, cabbage & spices served with tomato sauce (v)",
    price: "$14.00",
  },
  {
    name: "Lamb or Chicken Momo ",
    desc: "Choice of lamb or Chicken steamed dumplings served with tomato sauce",
    price: "$15.50",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Momo = ({ accordionState, setAccordionState }: Props) => {
  return (
    <Accordion
      title={MOMO_STEAMED}
      expanded={accordionState === MOMO_STEAMED}
      onChange={() =>
        setAccordionState((prev) => (prev === MOMO_STEAMED ? "" : MOMO_STEAMED))
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
          {items.map((x, i) => {
            return (
              <DisplayMenu
                name={x.name}
                desc={x.desc}
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

export default Momo;
