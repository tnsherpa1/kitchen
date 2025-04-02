import React from "react";

import { CSSProperties } from "styled-components";

import { H1, H2, H3, H4, H5, H6, Paragraph, Span } from "./styles";
import clsx from "clsx";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TagType = HeadingType | "p" | "span" | "subtitle1" | "subtitle2";

interface ITypography {
  as: TagType;
  className?: string;
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  dangerouslySetInnerHTML?: any;
}

const Typography = ({
  as = "p",
  className,
  children,
  onClick,
  style,
  title,
  dangerouslySetInnerHTML,
}: ITypography) => {
  let Element;
  if (as === "h1") Element = H1;
  else if (as === "h2") Element = H2;
  else if (as === "h3") Element = H3;
  else if (as === "h4") Element = H4;
  else if (as === "h5") Element = H5;
  else if (as === "h6") Element = H6;
  else if (as === "span") Element = Span;
  else Element = Paragraph;

  if (!as) {
    throw new Error("as should not be empty");
  }

  if (!children) return null;

  const defaultContent = typeof children === "string" ? children : "content";
  return (
    <Element
      className={clsx({ [as.toLowerCase()]: as }, className)}
      onClick={onClick}
      style={style}
      title={title || defaultContent}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Element>
  );
};

export default Typography;
