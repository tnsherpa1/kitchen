import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible'

const TikaMasala = props => (
  <Collapsible tabIndex={0} trigger="Tika Masala">
    <div className="table-wrapper">
    <div className="box">
        <ul className="alt">
            <li>(Served with a choice of steamed Basmati or Brown Rice)</li>
            <li>Please let us know if you like your curries mild, medium or spicy</li>
            <li>Served in a smooth creamy sauce with your choice of...</li>
            <li>Veggie ($19.50)</li>
            <li>Organic Tofu ($18.50)</li>
            <li>Free Range Chicken ($20.50)</li>
            <li>Lamb ($21.50)</li>
            <li>Salmon ($21.50)</li>
            <li>Veggie Vegan Tikki Masala ($19.50)</li>
        </ul>
    </div>
    </div>
  </Collapsible>
)

TikaMasala.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default TikaMasala
