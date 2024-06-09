import React from "react";
import DisplayMenu from "../DisplayMenu";
import Accordion from "@/components/Accordion";

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

const Momo = () => (
  <Accordion title="MoMo - Steamed Dumplings">
    <div className="table-wrapper">
      <DisplayMenu items={items} />
    </div>
  </Accordion>
);

export default Momo;
