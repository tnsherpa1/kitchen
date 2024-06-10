import React, { FC } from "react";

import clsx from "clsx";

import { DrawerPosition } from "..";

import { StyledDiv } from "./style";

type Func = () => void;

interface DrawerProps {
  children: React.ReactNode;
  maxWidth?: string;
  minWidth?: string;
  isEmpty?: boolean;
  title: string;
  subTitle?: string;
  onClose: Func;
  empty?: {
    title?: string;
    description?: string;
  };
  width?: number | string;
  footer: React.ReactNode;
  size: "fullscreen" | "auto";
  position: DrawerPosition;
  onClearClick?: Func;
  showClearAction?: boolean;
  hasIcon?: boolean;
  headerPromotionalBanner?: React.ReactNode;
}

interface headerProps {
  title: string;
  subTitle?: string;
  onClose: Func;
  onClearClick?: Func;
  showClearAction?: boolean;
  hasIcon?: boolean;
  headerPromotionalBanner?: React.ReactNode;
}
const Header = ({
  title,
  subTitle = "",
  hasIcon,
  onClose,
  onClearClick,
  showClearAction = false,
  headerPromotionalBanner,
}: headerProps) => {
  return (
    <>
      <div className="drawer-header">
        <div className="drawer-header-wrapper">
          <div className={clsx("drawer-header-title")}>
            <h3 className="drawer-title">
              {hasIcon && <i className="icon-cart1" />}
              <strong>{title}</strong>
            </h3>
            {subTitle ? <span className="sub-title">{subTitle}</span> : null}
          </div>
          <i className="icon-close" onClick={onClose} />
        </div>
        {showClearAction && (
          <h6 className="action-clear" onClick={onClearClick}>
            Clear Cart
          </h6>
        )}
      </div>
      {headerPromotionalBanner}
    </>
  );
};

const DrawerContent: FC<DrawerProps> = ({
  children,
  isEmpty,
  title,
  subTitle,
  footer,
  onClose,
  size,
  empty,
  position = "right",
  width = "25%",
  maxWidth,
  minWidth,
  onClearClick,
  showClearAction,
  hasIcon,
  headerPromotionalBanner,
}) => {
  return (
    <StyledDiv
      className={clsx({ "empty-drawer": isEmpty }, "drawer-wrap", position)}
      size={size}
      style={{
        maxWidth: maxWidth,
        minWidth: minWidth,
      }}
      width={width}
    >
      {title && (
        <Header
          title={title}
          subTitle={subTitle}
          onClose={onClose}
          onClearClick={onClearClick}
          showClearAction={showClearAction}
          hasIcon={hasIcon}
          headerPromotionalBanner={headerPromotionalBanner}
        />
      )}
    </StyledDiv>
  );
};

export default DrawerContent;
