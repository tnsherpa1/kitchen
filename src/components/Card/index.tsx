import React from "react";
import { StyledDiv } from "./style";
import ImageWithFallBack from "../ImageWithFallBack";
import { Link } from "gatsby";
import { truncateString } from "@/utils/turncate-string";

type Props = {
  imgURL: string;
  alt: string;
  content: string;
  href: string;
  linkLabel?: string;
};

const Card = ({
  imgURL,
  alt,
  content,
  href,
  linkLabel = "LEARN MORE",
}: Props) => {
  return (
    <StyledDiv>
      <div className="card-image-wrapper">
        <ImageWithFallBack src={imgURL} alt={alt} />
      </div>

      <div className="card-content-wrapper">
        <p title={content} className="content-text">
          {truncateString(content)}
        </p>

        <Link to={href}>{linkLabel}</Link>
      </div>
    </StyledDiv>
  );
};

export default Card;
