import React from "react";

type Props = {
  name: string;
  desc?: string;
  price: string;
};

const DisplayMenu = ({ name, desc, price }: Props) => {
  return (
    <tbody>
      <tr>
        {name && <td>{name}</td>}
        {desc && <td>{desc}</td>}
        {price && <td>{price}</td>}
      </tr>
    </tbody>
  );
};

export default DisplayMenu;
