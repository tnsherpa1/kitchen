import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu'

const items = [
  {
    name: "Gloria Ferrer, Blanc de Noir (375ml)",
    price: "$11.00, $20.00(Btl)"
  },
  {
    name: "NV Mumm Brut, Napa Valley",
    price: "$11.00"
  },
  {
    name: "Zardetto Prosecco Brut, Italy",
    price: "$11.00, $37.00(Btl)"
  },
  {
    name: "Alexandrie North Coast Brut",
    price: "$11.00, $46.00(Btl)"
  }
]

const Bubbles = props => (
  <Collapsible tabIndex={0} trigger="Sparkling Wines">
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

Bubbles.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Bubbles
