import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { WHITE_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const WhiteWines = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("white_wines");

  if (!data.length) return null;

  return (
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
          {data.map((x, i) => {
            return <DisplayMenu name={x.name} price={x.price} key={i} />;
          })}
        </table>
      </div>
    </Accordion>
  );
};

export default WhiteWines;
