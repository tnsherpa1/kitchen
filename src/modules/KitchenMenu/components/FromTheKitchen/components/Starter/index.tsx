import React from "react";
import Accordion from "@/components/Accordion";
import { STARTERS_AND_SALADS } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import DisplayMenu from "../../../DisplayMenu";

type Props = {
  accordionState: string;
  setAccordionState: React.Dispatch<React.SetStateAction<string>>;
};

const Starter = ({ accordionState, setAccordionState }: Props) => {
  const data = useAllMarkdownData("starter_salad");

  if (!data.length) return null;

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

          {data.map((item, i) => {
            return (
              <DisplayMenu
                name={item.name}
                price={item.price}
                desc={item.description}
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
