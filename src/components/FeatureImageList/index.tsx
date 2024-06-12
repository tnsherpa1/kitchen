import { Link } from "gatsby";
import React from "react";
import { StyledArticle } from "./style";
import { defaultPalette } from "@/theme/color";

type Props = {
  title: string;
  imageURL: string;
  href: string;
  className?: string;
  bgColor: keyof typeof defaultPalette;
};

const FeatureImageList = ({
  title,
  imageURL,
  href,
  className,
  bgColor,
}: Props) => {
  return (
    <StyledArticle
      style={{ backgroundImage: `url(${imageURL})` }}
      className={className}
      $bgcolor={bgColor}
    >
      <Link to={href} className="link primary">
        <header className="feature-title">
          <h3>{title}</h3>
        </header>
      </Link>
    </StyledArticle>
  );
};

export default FeatureImageList;
