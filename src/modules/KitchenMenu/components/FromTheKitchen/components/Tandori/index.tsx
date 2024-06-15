import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { TANDOORI } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "Rack of Lamb",
    desc: "Rack of Lamb marinated in perfect spices and broiled in tandoor oven (best way to eat Lamb)",
    price: "$38.95",
  },
  {
    name: "Mixed Grill Tandoori",
    desc: "Sizzling platters with a mix of Prawn, Leg of Lamb and Salmon Tandoori",
    price: "$31.95",
  },
  {
    name: "Salmon Tandoori",
    desc: "Salmon marinated and broiled in tandoor oven",
    price: "$27.95",
  },
  {
    name: "Tandoori Tikka",
    desc: " Free range Chicken breast marinated and broiled in tandoor oven",
    price: "$24.95",
  },
  {
    name: "Chicken Tandoori",
    desc: "Free range Chicken with bones marinated and broiled in tandoor oven",
    price: "$24.95",
  },
  {
    name: "Vegetable Tandoori",
    desc: "Different kinds of seasonal vegetables lightly spiced and served sizzling hot",
    price: "$23.95",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Tandori = ({ accordionState, setAccordionState }: Props) => (
  <Accordion
    title={TANDOORI}
    expanded={accordionState === TANDOORI}
    onChange={() =>
      setAccordionState((prev) => (prev === TANDOORI ? "" : TANDOORI))
    }
  >
    <div className="table-wrapper">
      <ul className="alt">
        <li>
          (Sizzling Platters)
          <br />
          Marinated in yogurt and Himalayan spices and broiled in the tandoor
          oven, served sizzling on a bed of onions and bell peppers with fresh
          spinach topping.
          <br />
          All Tandoori items served with a choice of Steamed Basmati or Brown
          rice.
        </li>
      </ul>

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
            <DisplayMenu name={x.name} desc={x.desc} price={x.price} key={i} />
          );
        })}
      </table>
    </div>
  </Accordion>
);

export default Tandori;
