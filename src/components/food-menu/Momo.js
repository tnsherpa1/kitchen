import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu';

const items = [
    {
        name: "Veggie Momo",
        desc: "Steamed dumplings filled w/spinach, onion, cabbage & spices served with tomato sauce (v)",
        price: "$12.50"
    },
    { 
        name: "Lamb or Chicken Momo ",
        desc: "Choice of lamb or Chicken steamed dumplings served with tomato sauce",
        price: "$13.95"
    }
]


const Momo = props => (
  <Collapsible tabIndex={0} trigger="MoMo - Steamed Dumplings">
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

Momo.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Momo
