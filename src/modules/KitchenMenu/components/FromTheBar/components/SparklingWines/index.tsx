import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { SPARKLING_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "Gloria Ferrer, Blanc de Noir (375ml)",
    price: "$11.00, $20.00(Btl)",
  },
  {
    name: "NV Mumm Brut, Napa Valley",
    price: "$11.00",
  },
  {
    name: "Zardetto Prosecco Brut, Italy",
    price: "$11.00, $37.00(Btl)",
  },
  {
    name: "Alexandrie North Coast Brut",
    price: "$11.00, $46.00(Btl)",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const SparklingWines = ({ accordionState, setAccordionState }: Props) => (
  <Accordion
    title={SPARKLING_WINES}
    expanded={accordionState === SPARKLING_WINES}
    onChange={() =>
      setAccordionState((prev) =>
        prev === SPARKLING_WINES ? "" : SPARKLING_WINES
      )
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

export default SparklingWines;
