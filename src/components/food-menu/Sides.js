import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
    {
        name: "Rice",
        desc: "Your choice of Brown Rice or Steamed Basmati Rice",
        price: "$4.00"
    },
    {
        name: "Buttered Naan",
        desc: "Traditionally baked Bread in tandoor Oven",
        price: "$4.00"
    },
    {
        name: "Garlic Naan",
        desc: "Garlic Basil Naan Garlic and Basil spiced Naan",
        price: "$4.50"
    },
    {
      name: "Garlic Cilantro Naan",
      desc: "Garlic and Cilantro spiced Naan",
      price: "$4.50"
    },
    {
        name: "Raita",
        desc: "Homemade yogurt with shredded cucumbers, toasted cumin, mint and spices",
        price: "$4.00"
    },
    {
        name: "Papadum",
        desc: "Papad Deep fried or Baked flat lentil wafers (Papadum)",
        price: "$4.00"
    },
    {
        name: "Mango Chutney",
        desc: "Mango, ginger, garlic, salt and sugar (Just the perfect combination of sweet and salty)",
        price: "$3.50"
    },
    {
        name: "Mixed Pickles",
        desc: "Indian style preserved pickles (intense flavors)",
        price: "$3.50"
    }
]


const Sides = props => (
  <Collapsible tabIndex={0} trigger="Sides">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            <DisplayMenu items={items} />
        </tbody>
      </table>
    </div>
  </Collapsible>
)

Sides.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Sides
