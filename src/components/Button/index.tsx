import { Link } from "gatsby";
import React from "react";
import { StyledDiv, StyledLink } from "./style";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  label?: string;
  skin: "contained" | "outline";
  children: React.ReactNode;
  href?: string;
  alt?: string;
  className?: string;
  size?: "md" | "sm";
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
};

const Button = ({
  label,
  skin,
  href,
  alt,
  className,
  children,
  size,
  disabled,
  loader,
  onClick,
}: Props) => {
  const MotionStyledButton = motion(StyledDiv);

  if (href) {
    return (
      <StyledLink>
        <Link
          to={href}
          className={clsx(className, skin, size)}
          aria-label={label || "link-button"}
        >
          {children}
        </Link>
      </StyledLink>
    );
  }

  return (
    <MotionStyledButton
      className={clsx(className, skin, size, { disabled, isLoading: loader })}
      aria-label={label || "button"}
      onClick={() => (!disabled || !loader) && onClick?.()}
    >
      {loader ? "Loading..." : children}
    </MotionStyledButton>
  );
};

export default Button;
