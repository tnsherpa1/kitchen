import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu'

const items = [
  {
    name: "Gloria Ferrer, Blanc de Noir (375,l)",
    price: "$18.00 (Btl)"
  },
  {
    name: "NV Mumm Brut, Napa Valley",
    price: "$9.00"
  },
  {
    name: "Zardetto Prosecco Brut, Italy",
    price: "$34.00 (Btl)"
  },
  {
    name: "Alexandrie North Coast Brut",
    price: "$45.00 (Btl)"
  }
]

const Bubbles = props => (
  <Collapsible trigger="Sparkling Wines">
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
