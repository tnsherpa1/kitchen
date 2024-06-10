import React from "react";
import DisplayMenu from "../DisplayMenu";
import Accordion from "@/components/Accordion";

const items = [
  {
    name: "Rice",
    desc: "Your choice of Brown Rice or Steamed Basmati Rice",
    price: "$4.50",
  },
  {
    name: "Buttered Naan",
    desc: "Traditionally baked Bread in tandoor Oven",
    price: "$4.50",
  },
  {
    name: "Garlic Naan",
    desc: "Garlic Basil Naan Garlic and Basil spiced Naan",
    price: "$4.95",
  },
  {
    name: "Garlic Cilantro Naan",
    desc: "Garlic and Cilantro spiced Naan",
    price: "$4.95",
  },
  {
    name: "Raita",
    desc: "Homemade yogurt with shredded cucumbers, toasted cumin, mint and spices",
    price: "$4.50",
  },
  {
    name: "Papadum",
    desc: "Papad Deep fried or Baked flat lentil wafers (Papadum)",
    price: "$4.50",
  },
  {
    name: "Mango Chutney",
    desc: "Mango, ginger, garlic, salt and sugar (Just the perfect combination of sweet and salty)",
    price: "$3.50",
  },
  {
    name: "Mixed Pickles",
    desc: "Indian style preserved pickles (intense flavors)",
    price: "$3.50",
  },
];

const Sides = () => (
  <Accordion title="Sides">
    <div className="table-wrapper">
      <DisplayMenu items={items} />
    </div>
  </Accordion>
);

export default Sides;
