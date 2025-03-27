import React from "react";
import { StyledFooter } from "./style";
import Icons from "../Icons";
import facebookIcon from "@/assets/images/icons/facebook.png";
import instagramIcon from "@/assets/images/icons/instagram.png";
import yelp from "@/assets/images/yelp-brands-solid.svg";

import settings from "content/settings/settings.json";
import Typography from "../Typography";
const Footer = () => {
  const {
    footer_text = "© Himalayan Sherpa Kitchen 2024",
    yelp_link = "",
    facebook_link = "",
    instagram_link = "",
  } = settings || {};
  return (
    <StyledFooter id="footer">
      <ul className="social-icons-list">
        {facebook_link && (
          <li>
            <a
              href={facebook_link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon alt fa-facebook"
            >
              <Icons icon={facebookIcon} />
            </a>
          </li>
        )}
        {instagram_link && (
          <li>
            <a
              href={instagram_link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon alt fa-instagram"
            >
              <Icons icon={instagramIcon} />
            </a>
          </li>
        )}
        {yelp_link && (
          <li>
            <a
              href={yelp_link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon alt fa-yelp"
            >
              <Icons icon={yelp} />
            </a>
          </li>
        )}
      </ul>
      <ul className="copyright">
        <li>
          <Typography as="subtitle2">{footer_text}</Typography>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
