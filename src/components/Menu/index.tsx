import React from "react";
import { Link } from "gatsby";
import star from "@/assets/images/4star.png";

const Menu = () => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Our Story</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/everest">Everest Trek</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a
            href="https://www.opentable.com/r/himalayan-sherpa-kitchen-st-helena"
            className="button special fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservation
          </a>
        </li>
        <li>
          <a href="tel:1-707-963-4439" className="button fit">
            Phone: (707) 963-4439
          </a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a
            href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-yelp"
          >
            <span className="label">Yelp</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={star} alt="yelp" />
          </a>
        </li>
      </ul>
    </div>
    <button className="close">Close</button>
  </nav>
);

export default Menu;
