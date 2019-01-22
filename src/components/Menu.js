import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">Our Story</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/menu">Menu</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/gallery">Gallery</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/experience">What we offer</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/everest">Everest Trek</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about#contact">Contact</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://www.opentable.com/r/himalayan-sherpa-kitchen-st-helena" className="button special fit" target="_blank" rel="noopener noreferrer">Reservation</a></li>
                <li><a href="tel:+7079634439" className="button fit">Phone: (707) 963-4439</a></li>
            </ul>
        </div>
        <button className="close" onClick={props.onToggleMenu}>Close</button>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
