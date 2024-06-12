import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: "Navarro Vineyards Pinot Noir Grape Juice",
    price: "$6.00  ($20 Btl)"
  },
  {
    name: "Mango Lassi",
    price: "$5.50"
  },
  {
    name: "Chai Tea",
    price: "$4.00"
  },
  {
    name: "Arnold Palmer",
    price: "$4.50"
  },
  {
    name: "Ice Tea/Soda/Lemonade/Sprite/Diet Coke",
    price: "$4.00"
  },
  {
    name: "San Pellegrino Sparkling (750ml)",
    price: "$6.00"
  },
  {
    name: "Acqua Panna Still Water(750ml)",
    price: "$6.00"
  }
]

const Bevs = props => (
  <Collapsible tabIndex={0} trigger="Beverages">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
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

Bevs.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Bevs
