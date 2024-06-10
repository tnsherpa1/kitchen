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
  ariaLabel?: string;
  className?: string;
};

const Button = ({
  label,
  skin,
  href,
  alt,
  ariaLabel,
  className,
  children,
}: Props) => {
  const MotionStyledButton = motion(StyledDiv);

  if (href) {
    return (
      <StyledLink>
        <Link to={href} className={clsx(className, skin)}>
          {children}
        </Link>
      </StyledLink>
    );
  }

  return (
    <MotionStyledButton className={clsx(className, skin)}>
      {children}
    </MotionStyledButton>
  );
};

export default Button;
