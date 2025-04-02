import ImageWithFallBack from "@/components/ImageWithFallBack";
import React from "react";
import { StyledDiv } from "./style";
import "react-image-lightbox/style.css";

type Props = {
  imageUrl: string;
  alt?: string;
  onClick?: () => void;
};

const ImageList = ({ imageUrl, alt = "Kitchen image", onClick }: Props) => {
  return (
    <StyledDiv onClick={onClick}>
      <ImageWithFallBack src={imageUrl} alt={alt} />
    </StyledDiv>
  );
};

export default ImageList;
