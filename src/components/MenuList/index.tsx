import React from "react";
import { Link } from "gatsby";
import star from "@/assets/images/4star.png";
import Button from "../Button";
import { StyledUl } from "./style";
import clsx from "clsx";
import settings from "content/settings/settings.json";
import { ImageWithFallBack } from "restaurant-ui/components";
import yelp from "@/assets/images/yelp-brands-solid.svg";

const linkItem = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Our Story",
    url: "/about-us",
  },
  {
    label: "Menu",
    url: "/menu",
  },
  {
    label: "Gallery",
    url: "/gallery",
  },
  {
    label: "Everest Trek",
    url: "/everest-trek",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
];

const Menu = () => {
  const {
    phone_number = "",
    reservation_link = "",
    yelp_link = "",
    online_ordering = "https://order.toasttab.com/online/himalayan-sherpa-kitchen-1148-main-st",
  } = settings || {};
  return (
    <StyledUl className="menu-list-wrapper">
      {linkItem.map((x) => {
        const { pathname } = window.location;

        const active = pathname === x.url;
        return (
          <li className={clsx("link-item", { active })} key={x.url}>
            <Link to={x.url}>{x.label}</Link>
          </li>
        );
      })}

      {reservation_link && (
        <li>
          <Button
            href="https://www.opentable.com/r/himalayan-sherpa-kitchen-st-helena"
            className="button special fit"
            rel="noopener noreferrer"
            skin="outline"
            size="lg"
          >
            Reservation
          </Button>
        </li>
      )}
      {online_ordering && (
        <li>
          <Button
            href={online_ordering}
            className="button special fit"
            rel="noopener noreferrer"
            skin="outline"
            size="lg"
          >
            Online Ordering
          </Button>
        </li>
      )}
      {phone_number && (
        <li>
          <Button
            skin="outline"
            href={`tel:${phone_number}`}
            className="button fit"
            size="lg"
          >
            Phone: {phone_number}
          </Button>
        </li>
      )}
      {yelp_link && (
        <li className="icon-logo">
          <a
            href={yelp_link}
            target="_blank"
            rel="noopener noreferrer"
            className="yelp-wrapper"
          >
            <ImageWithFallBack src={yelp} alt="yelp" />
          </a>
          <a href={yelp_link} target="_blank" rel="noopener noreferrer">
            <img src={star} alt="yelp" />
          </a>
        </li>
      )}
    </StyledUl>
  );
};

export default Menu;
