import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
  {
    name: "Navarro Vineyards Pinot Noir Grape Juice",
    price: "$5.00"
  },
  {
    name: "Mango Lassi",
    price: "$4.00"
  },
  {
    name: "Chai Tea",
    price: "$3.00"
  },
  {
    name: "Arnold Palmer",
    price: "$3.00"
  },
  {
    name: "Ice Tea/Soda/Lemonate",
    price: "$3.00"
  },
  {
    name: "San Pellegrino Sparkling (750ml)",
    price: "$5.00"
  },
  {
    name: "Acqua Panna Still Water(750ml)",
    price: "$5.00"
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
