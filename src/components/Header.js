import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.svg'

/* eslint-disable react/prop-types */
const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={logo} alt="sherpa kitchen logo"/><strong>Himalayan Sherpa Kitchen</strong></Link>
        <nav>
            <button className="menu-link" onClick={props.onToggleMenu}>Menu</button>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
