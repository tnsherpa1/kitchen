import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { TIKA_MASALA } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const TikaMasala = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("tika_masala");

  if (!data.length) return null;

  return (
    <Accordion
      title={TIKA_MASALA}
      expanded={accordionState === TIKA_MASALA}
      onChange={() =>
        setAccordionState((prev) => (prev === TIKA_MASALA ? "" : TIKA_MASALA))
      }
    >
      <div className="table-wrapper">
        <p>
          Served with a choice of steamed Basmati or Brown Rice Served in a
          smooth creamy sauce with your choice of
        </p>
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

export default TikaMasala;
