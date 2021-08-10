import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'

const TikaMasala = props => (
  <Collapsible tabIndex={0} trigger="Tika Masala">
    <div className="table-wrapper">
    <div className="box">
        <ul className="alt">
            <li>(Served with a choice of steamed Basmati or Brown Rice or Buttered Naan Bread)</li>
            <li>Served in a smooth creamy sauce with your choice of</li>
            <li>Veggie $17.50</li>
            <li>Organic Tofu $16.50)</li>
            <li>Free Range Chicken $18.50</li>
            <li>Lamb $19.50</li>
            <li>Salmon $19.50</li>
        </ul>
    </div>
    </div>
  </Collapsible>
)

TikaMasala.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default TikaMasala
