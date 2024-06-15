import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { STARTERS_AND_SALADS } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "Nepalese Daal Soup",
    desc: "Lentil soup tempered with sauteed garlic and fresh spinach (v)",
    price: "$9.00",
  },
  {
    name: "Vegetables Pakoras ",
    desc: "Golden fried mixed vegetables fritters served with our homemade mint sauce (v)",
    price: "$8.50",
  },
  {
    name: "Vegetable Samosas ",
    desc: "Crisp savory pastries stuffed with potatoes, green peas & spices served with mint sauce (v)",
    price: "$8.50",
  },
  {
    name: "Himalayan Salad ",
    desc: "Organic field greens, strawberries, almonds and cucumber with our homemade dressing",
    price: "$12.00",
  },
  {
    name: "Spinach and Beet Salad ",
    desc: "Roasted beet, baby spinach, carrot, cherry tomatoes with cambozola cheese",
    price: "$14.00",
  },
  {
    name: "Garlic Prawn Salad ",
    desc: "Sauteed garlic prawns, organic field greens, cucumbers, tomatoes and goat cheese",
    price: "$17.00",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Starter = ({ accordionState, setAccordionState }: Props) => {
  return (
    <Accordion
      title={STARTERS_AND_SALADS}
      expanded={accordionState === STARTERS_AND_SALADS}
      onChange={() =>
        setAccordionState((prev) =>
          prev === STARTERS_AND_SALADS ? "" : STARTERS_AND_SALADS
        )
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
                price={x.price}
                desc={x.desc}
                key={i}
              />
            );
          })}
        </table>
      </div>
    </Accordion>
  );
};

export default Starter;
