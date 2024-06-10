import React from "react";
import { StyledFooter } from "./style";
import Icons from "../Icons";

const Footer = () => (
  <StyledFooter id="footer">
    <ul className="social-icons-list">
      <li>
        <a
          href="https://www.facebook.com/HimalayanSherpaKitchen/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon alt fa-facebook"
        >
          <Icons icon="/images/icons/facebook.png" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/sthelenasherpa"
          target="_blank"
          rel="noopener noreferrer"
          className="icon alt fa-instagram"
        >
          <Icons icon="/images/icons/instagram.png" />
        </a>
      </li>
      <li>
        <a
          href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
          target="_blank"
          rel="noopener noreferrer"
          className="icon alt fa-yelp"
        >
          <Icons icon="/images/icons/facebook.png" />
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; Himalayan Sherpa Kitchen 2024</li>
    </ul>
  </StyledFooter>
);

export default Footer;
