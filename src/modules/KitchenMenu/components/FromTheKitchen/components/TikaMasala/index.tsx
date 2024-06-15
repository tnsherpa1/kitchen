import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { TIKA_MASALA } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "Veggie",
    price: "$19.50",
  },
  {
    name: "Organic Tofu",
    price: "$18.50",
  },
  {
    name: "Free Range Chicken",
    price: "$20.50",
  },
  {
    name: "Lamb",
    price: "$21.50",
  },
  {
    name: "Salmon",
    price: "$21.50",
  },
  {
    name: "Veggie Vegan Tikki Masala",
    price: "$19.50",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const TikaMasala = ({ accordionState, setAccordionState }: Props) => (
  <Accordion
    title={TIKA_MASALA}
    expanded={accordionState === TIKA_MASALA}
    onChange={() =>
      setAccordionState((prev) => (prev === TIKA_MASALA ? "" : TIKA_MASALA))
    }
  >
    <div className="table-wrapper">
      <p>
        Served with a choice of steamed Basmati or Brown Rice Served in a smooth
        creamy sauce with your choice of
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        {items.map((x, i) => {
          return <DisplayMenu name={x.name} price={x.price} key={i} />;
        })}
      </table>
    </div>
  </Accordion>
);

export default TikaMasala;
