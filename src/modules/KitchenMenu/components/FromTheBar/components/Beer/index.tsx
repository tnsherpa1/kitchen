import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { BEER } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "Napa Smith Organics IPA (Draft)",
    price: "$6.50",
  },
  {
    name: "Trumer Pilsner (Draft)",
    price: "$7.00",
  },
  {
    name: "Lagunitas IPA (Draft)",
    price: "$7.00",
  },
  {
    name: "Nepal Ice Nepalese Lager (Bottled)",
    price: "$10.00",
  },
  {
    name: "805 Blonde Ale (Bottled)",
    price: "$6.00",
  },
  {
    name: "Fat Tire Amber Ale (Bottled)",
    price: " $6.00",
  },
  {
    name: "Taj Mahal - Imported from India (Bottled)",
    price: "$10.00",
  },
  {
    name: "Mustang - Nepalese Lager (Bottled)",
    price: "$5.50",
  },
  {
    name: "Lagunitas Hop Stoopid Ale (Bottled)",
    price: "$6.50",
  },
  {
    name: "Stella Artois (Bottled)",
    price: "$6.00",
  },
  {
    name: "Anchor Steam Original (Bottled)",
    price: "$5.50",
  },
  {
    name: "Napa Smith Pilsner (Bottled)",
    price: "$5.50",
  },
  {
    name: "Non Alcoholic Beer (Bottled)",
    price: "$6.00",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Beer = ({ accordionState, setAccordionState }: Props) => (
  <Accordion
    title={BEER}
    expanded={accordionState === BEER}
    onChange={() => setAccordionState((prev) => (prev === BEER ? "" : BEER))}
  >
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Beer</th>
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

export default Beer;
