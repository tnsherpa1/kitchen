import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../DisplayMenu";

const items = [
  {
    name: "Mismas Tarkari",
    desc: "Seasonal mixed vegetables in a light curry sauce (v)",
    price: "$17.95",
  },
  {
    name: "Chana Masala ",
    desc: "Organic Garbanzo beans with herbs in an onion gravy (v)",
    price: "$17.95",
  },
  {
    name: "Alu Cauli Kerau",
    desc: "Potatoes, cauliflowers and green peas in curry sauce (v)",
    price: "$17.95",
  },
  {
    name: "Alu Bhanta",
    desc: "Himalayan style cubes of eggplant and potatoes in curry sauce (v)",
    price: "$17.95",
  },
  {
    name: "Saag Paneer",
    desc: "Minced spinach with fried cheese cubes in a light creamy sauce",
    price: "$18.95",
  },
  {
    name: "Matar Paneer",
    desc: "Green peas and fried cheese cubes in a curry sauce",
    price: "$18.95",
  },
  {
    name: "Kukhura Dahi",
    desc: "Free range chicken cooked in yogurt and spiced curry sauce",
    price: "$18.95",
  },
  {
    name: "Kukhura Ra Bhanta",
    desc: "Free range chicken curry with cubes of Japanese eggplant",
    price: "$19.95",
  },
  {
    name: "Lukshya Ra Phing",
    desc: "Tender cubes of lamb curry with Phing (glass noodles)",
    price: "$20.95",
  },
  {
    name: "Lukshya Saag",
    desc: "Tender cubes of lamb and spinach cooked in a curry sauce",
    price: "$20.95",
  },
  {
    name: "Machha Ra Bhanta",
    desc: "Salmon and eggplant cooked in garlic, ginger and curry sauce",
    price: "$20.95",
  },
  {
    name: "Prawns Vindaloo",
    desc: "Prawns and potatoes in a Vindaloo curry sauce",
    price: "$20.95",
  },
];

const Curry = () => (
  <Accordion title="Curry Dishes">
    <div className="table-wrapper">
      <p>Served with a choice of steamed Basmati or Brown Rice</p>
      <DisplayMenu items={items} />;
    </div>
  </Accordion>
);

export default Curry;
