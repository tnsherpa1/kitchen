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
        {name && <td className="name">{name}</td>}
        {desc && <td className="desc">{desc}</td>}
        {price && <td className="price">{price}</td>}
      </tr>
    </tbody>
  );
};

export default DisplayMenu;
