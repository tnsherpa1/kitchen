"use client";
import React, { FC } from "react";

import clsx from "clsx";
import { CSSProperties } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import DrawerContent from "./DrawerContent";
import { drawerAnimation } from "./drawerAnimation";
import { StyledDrawer } from "./style";
import Overlay from "../Overlay";

export type DrawerPosition = "left" | "right" | "top" | "bottom";

const MotionStyledDrawer = motion(StyledDrawer);
interface DrawerProps {
  open: boolean;
  position?: DrawerPosition;
  title?: string;
  subTitle?: string;
  size?: "fullscreen" | "auto";
  drawerType?: "normal" | "custom";
  empty?: {
    title?: string;
    description?: string;
  };
  onClose: () => void;
  width: string | number;
  overlay?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  top?: number;
  drawerZindex?: number;
  overlayZindex?: number;
  overlayOpacity?: number;
  overlayColor?: string;
  style?: CSSProperties;
  isEmpty?: boolean;
  showClearAction?: boolean;
  onClearClick?: () => void;
  hasIcon?: boolean;
  headerPromotionalBanner?: React.ReactNode;
}

interface CustomDrawer extends DrawerProps {
  drawerType: "custom";
  footer?: undefined;
  title?: undefined;
}

interface NormalDrawer extends DrawerProps {
  title: string;
}

interface EmptyDrawer extends DrawerProps {
  isEmpty?: true;
  empty: {
    title: string;
    description: string;
  };
  title: string;
  footer?: undefined;
}

const Drawer: FC<EmptyDrawer | CustomDrawer | NormalDrawer> = ({
  open,
  children,
  className,
  position = "left",
  width = 450,
  drawerType = "normal",
  title = "testing",
  subTitle = "",
  onClose,
  footer,
  top = 0,
  size = "fullscreen",
  drawerZindex = 1,
  overlayZindex = 11,
  overlayColor,
  overlayOpacity,
  showClearAction,
  onClearClick,
  hasIcon = false,
  style = {},
  headerPromotionalBanner,
  ...props
}) => {
  React.useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <Overlay
            zIndex={overlayZindex}
            opacity={overlayOpacity}
            color={overlayColor}
            position="fixed"
          />
          <MotionStyledDrawer
            animate="open"
            exit="closed"
            initial="closed"
            className={clsx(className, position)}
            transition={{ ease: "linear", duration: 0.3 }}
            variants={drawerAnimation(width, position)}
            $width={width}
            $size={size}
            $top={top}
            $zIndex={drawerZindex}
            style={style}
          >
            <div className="drawer-toggle" onClick={onClose} />
            {drawerType === "normal" ? (
              <DrawerContent
                empty={props.empty}
                position={position}
                width={width}
                isEmpty={props.isEmpty}
                title={title}
                subTitle={subTitle}
                onClose={onClose}
                footer={footer}
                size={size}
                showClearAction={showClearAction}
                onClearClick={onClearClick}
                hasIcon={hasIcon}
                headerPromotionalBanner={headerPromotionalBanner}
              >
                {children}
              </DrawerContent>
            ) : (
              <>{children}</>
            )}
          </MotionStyledDrawer>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
