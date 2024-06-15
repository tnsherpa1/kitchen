import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { WHITE_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "2021 Dancing Crow Vineyards Rose, Lake County (House White)",
    price: "$9.00, ($34.00 Btl)",
  },
  {
    name: "2022 Calafia “The Princess” Rose, Russian River",
    price: "$10.00 ($38.00 Btl)",
  },
  {
    name: "2020 Thomas Schmitt Estate Riesling, Germany",
    price: "$10.50 ($41.00 Btl)",
  },
  {
    name: "2022 Trefethen Dry Riesling, Napa Valley",
    price: "$11.00 ($42.00 Btl)",
  },
  {
    name: "2021 Chateau Montelena Riesling, Potter Valley",
    price: "$46.00 Btl",
  },
  {
    name: "2021 Abiouness, Amrita, White Wine, Napa Valley",
    price: "$10.00 ($38.00 Btl)",
  },
  {
    name: "2020 Flora Spring Pinot Grigio, Napa Valley",
    price: "$9.50 ($36.00 Btl)",
  },
  {
    name: "2021 Navarro Gewurztraminer, Anderson Valley",
    price: "$11.00 ($41.00 Btl)",
  },
  {
    name: "2020 Miner Simpson Vineyard California Viogner",
    price: "$10.00 ($38.00 Btl)",
  },
  {
    name: "2023 Honig Sauvignon Blanc, Napa Valley",
    price: "$10.00 ($39.00 Btl)",
  },
  {
    name: "2021 Twomey Estate Sauvignon Blanc, Napa Valley",
    price: "$46.00 Btl",
  },
  {
    name: "2021 Starmont Chardonney, Carneros",
    price: "$10.00 ($38.00 Btl)",
  },
  {
    name: "2021 Markham Chardonnay, Napa Valley",
    price: "$46.00 Btl",
  },
  {
    name: "2022 Apsara Chardonnay, Petaluma Gap",
    price: "$10.50 ($41 Btl)",
  },
  {
    name: "2022 The Terraces Chenin Blanc, Clarksburg",
    price: "$46.00 Btl",
  },
  {
    name: "Missing Thorn ( Alcohol Removed Wine )",
    price: "$40.00 ($38.00 Btl)",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const WhiteWines = ({ accordionState, setAccordionState }: Props) => (
  <Accordion
    title={WHITE_WINES}
    expanded={accordionState === WHITE_WINES}
    onChange={() =>
      setAccordionState((prev) => (prev === WHITE_WINES ? "" : WHITE_WINES))
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

export default WhiteWines;
