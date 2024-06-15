// import React from "react";

// type Props = {
//   title: string;
//   children: React.ReactNode;
//   className?: string;
// };

// const Accordion = ({ title, children, className }: Props) => {
//   return (
//     <div>
//       <div>{title}</div>

//       <div>{children}</div>
//     </div>
//   );
// };

// export default Accordion;

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import { AccordionStyledTitle, StyledDiv } from "./style";

type Props = {
  children: React.ReactNode;
  title: string;
  onChange: (title: string) => void;
  expanded: boolean;
  gutter?: boolean;
  className?: string;
  tag?: string;
  activeIcon?: "circle" | "plus";
  disable?: boolean;
  iconAlignLeft?: boolean;
};

/**
 *
 *
 * @param title: Title of the accordion
 * @param onChange: func which used to Toggle the accordion
 * @param expanded: shows the accordion content
 * @param gutter: it gives vertical space when accordion is active. default is false
 * @param children: React Node
 * @returns
 */

const Accordion = ({
  title,
  children,
  onChange,
  expanded,
  gutter = false,
  className,
  tag = "h3",
  activeIcon = "plus",
  disable = false,
  iconAlignLeft = false,
}: Props) => {
  return (
    <StyledDiv
      className={clsx(className, {
        active: expanded,
        gutter,
        disable: disable,
      })}
      $iconAlignLeft={iconAlignLeft}
    >
      <div className={clsx("accordion-header")} onClick={() => onChange(title)}>
        <AccordionStyledTitle
          as={tag}
          className={clsx("accordion-title", {
            circle: activeIcon === "circle",
            "circle-active": expanded,
          })}
        >
          {activeIcon === "plus" && (
            <i
              className={clsx(expanded ? "icon-minus" : "icon-plus", {
                "icon-align-left": iconAlignLeft,
              })}
            />
          )}
          {title}
        </AccordionStyledTitle>
      </div>

      <AnimatePresence>
        {expanded && children && (
          <motion.div
            className="accordion-content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledDiv>
  );
};

export default Accordion;
