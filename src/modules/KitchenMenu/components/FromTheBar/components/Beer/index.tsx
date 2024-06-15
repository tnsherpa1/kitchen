import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { BEER } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Beer = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("beer");

  if (!data.length) return null;

  return (
    <Accordion
      title={BEER}
      expanded={accordionState === BEER}
      onChange={() => setAccordionState((prev) => (prev === BEER ? "" : BEER))}
    >
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          {data.map((x, i) => {
            return <DisplayMenu name={x.name} price={x.price} key={i} />;
          })}
        </table>
      </div>
    </Accordion>
  );
};

export default Beer;
