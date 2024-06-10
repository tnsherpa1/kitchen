import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const ImageWithFallBack = ({ src, alt, className, width, height }: Props) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      aria-label={alt}
      className={className}
    />
  );
};

export default ImageWithFallBack;
