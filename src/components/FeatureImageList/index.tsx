import { Link } from "gatsby";
import React from "react";

type Props = {
  title: string;
  imageURL: string;
  href: string;
  className?: string;
};

const FeatureImageList = ({ title, imageURL, href, className }: Props) => {
  return (
    <article
      style={{ backgroundImage: `url(${imageURL})` }}
      className={className}
    >
      <header className="major">
        <h3>{title}</h3>
      </header>
      <Link to={href} className="link primary" />
    </article>
  );
};

export default FeatureImageList;
