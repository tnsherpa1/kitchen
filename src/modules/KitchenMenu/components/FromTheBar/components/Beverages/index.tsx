import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { BEVERAGES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "Navarro Vineyards Pinot Noir Grape Juice",
    price: "$6.00  ($20 Btl)",
  },
  {
    name: "Mango Lassi",
    price: "$5.50",
  },
  {
    name: "Chai Tea",
    price: "$4.00",
  },
  {
    name: "Arnold Palmer",
    price: "$4.50",
  },
  {
    name: "Ice Tea/Soda/Lemonade/Sprite/Diet Coke",
    price: "$4.00",
  },
  {
    name: "San Pellegrino Sparkling (750ml)",
    price: "$6.00",
  },
  {
    name: "Acqua Panna Still Water(750ml)",
    price: "$6.00",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Beverages = ({ accordionState, setAccordionState }: Props) => (
  <Accordion
    title={BEVERAGES}
    expanded={accordionState === BEVERAGES}
    onChange={() =>
      setAccordionState((prev) => (prev === BEVERAGES ? "" : BEVERAGES))
    }
  >
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
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

export default Beverages;
