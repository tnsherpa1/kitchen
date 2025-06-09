import React from "react";
import { StyledTr } from "./style";

type Props = {
  name: string;
  desc?: string;
  price: string;
  showDescription?: boolean;
};

const DisplayMenu = ({ name, desc, price, showDescription = true }: Props) => {
  console.log(!!desc && !showDescription, "@@aa@");
  return (
    <StyledTr className="table-td-wrapper" $hasDesc={Boolean(showDescription)}>
      {name && <td className="name">{name}</td>}
      {showDescription && (
        <>{desc ? <td className="desc">{desc}</td> : <td></td>}</>
      )}
      {price && <td className="price">{price}</td>}
    </StyledTr>
  );
};

export default DisplayMenu;
