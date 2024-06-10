import React from "react";

type Props = {
  items: Array<{
    name: string;
    desc: string;
    price: string;
  }>;
};

const DisplayMenu = ({ items }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        {items.map(({ name, desc, price }, i) => {
          return (
            <tr key={i}>
              <td>{name}</td>
              {desc ? <td>{desc}</td> : <td />}
              <td>{price}</td>
            </tr>
          );
        })}
      </thead>
      <tbody />
    </table>
  );
};

export default DisplayMenu;
