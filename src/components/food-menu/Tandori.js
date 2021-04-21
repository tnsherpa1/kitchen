import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'
import DisplayMenu from '../DisplayMenu'

const items = [
    {
        name: "Rack of Lamb",
        desc: "Rack of Lamb marinated in perfect spices and broiled in tandoor oven (best way to eat Lamb)",
        price: "$27.95"
    },
    {
        name: "Mixed Grill Tandoori",
        desc: "Sizzling platters with a mix of Prawn, Leg of Lamb and Salmon Tandoori",
        price: "$26.95"
    },
    {
        name: "Salmon Tandoori",
        desc: "Salmon marinated and broiled in tandoor oven",
        price: "$22.95"
    },   
    {
        name: "Tandoori Tikka",
        desc: " Free range Chicken breast marinated and broiled in tandoor oven",
        price: "$20.95"
    },
    {
        name: "Chicken Tandoori",
        desc: "Free range Chicken with bones marinated and broiled in tandoor oven",
        price: "$19.95"
    },   
    {
        name: "Vegetable Tandoori",
        desc: "Different kinds of seasonal vegetables lightly spiced and served sizzling hot",
        price: "$18.95"
    }
]

const Tandori = props => (
  <Collapsible tabIndex={0} trigger="Tandoori">
    <div className="table-wrapper">
    <ul className="alt">
        <li>(Sizzling Platters)<br/>
        Marinated in yogurt and Himalayan spices and broiled in the tandoor oven, served sizzling on a bed of onions
        and bell peppers with fresh spinach topping.<br/>
        All Tandoori items served with a choice of Buttered Naan bread or Steamed Basmati or Brown rice.</li>
    </ul>
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

Tandori.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Tandori
