import React from "react";

import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { RED_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";

const items = [
  {
    name: "2021 Hahn GSM, Central Coast",
    price: "$9.00 ($34.00 Btl)",
  },
  {
    name: "2021 Frank Family Vineyards, Pinot Noir, Carneros",
    price: "$66.00 Btl",
  },
  {
    name: "2021 Napa Cellars, Pinot Noir, Napa Valley",
    price: "$11.00 ($42.00 Btl)",
  },
  {
    name: "2021 Decoy Pinot Noir, Sonoma County",
    price: "$44.00 Btl",
  },
  {
    name: "2018 Bell Syrah, Yountville, Napa Valley",
    price: "$10.50 ($39.00 Btl)",
  },
  {
    name: "2018 Stag's Leap Merlot, Napa Valley",
    price: "$10.00 ($43.00 Btl)",
  },
  {
    name: "2017 Whitehall Lane, Merlot, Napa Valley",
    price: "$55.00 Btl",
  },
  {
    name: "2018 Pozzan Bacban Zinfandel, Napa Valley",
    price: "$12.00 ($42.00 Btl)",
  },
  {
    name: "2019 Bello Vineyards Cabernet Sauvignon, California",
    price: "$10.50 ($40.00 Btl)",
  },
  {
    name: "2019 Textbook Cabernet, Napa Valley",
    price: "$10.50 ($50.00 Btl)",
  },
  {
    name: "2019 Sterling Vineyard, Heritage Collection Merlot, Napa Valley",
    price: "$11.50 ($45.00 Btl)",
  },
  {
    name: "2022 Green & Red Vineyards Zinfandel, Napa Valley",
    price: "$11.00 ($42.00 Btl)",
  },
  {
    name: "2019 Hall Cabernet Sauvignon, Napa Valley",
    price: "$96.00 Btl",
  },
];

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const RedWines = ({ accordionState, setAccordionState }: Props) => (
  <Accordion
    title={RED_WINES}
    expanded={accordionState === RED_WINES}
    onChange={() =>
      setAccordionState((prev) => (prev === RED_WINES ? "" : RED_WINES))
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

export default RedWines;
