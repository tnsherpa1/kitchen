import { rem } from "polished";
import styled from "styled-components";
import { css } from "styled-components";

interface Props {
  $size: "fullscreen" | "auto";
  $top: number;
  $zIndex: number;
  $width: number | string;
}

export const StyledDrawer = styled.div<Props>`
  ${({ theme, $top, $size, $zIndex }) => css`
    top: ${$top ? `${$top}px` : 0};
    position: fixed;
    height: ${$size === "fullscreen" ? "100%" : "auto"};
    width: 100%;
    background-color: transparent;
    z-index: ${$zIndex || 1};

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    &.top,
    &.bottom {
      width: 100%;
    }

    .drawer-toggle {
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .drawer-wrap {
      @media (max-width: ${theme.breakPoints.sm}) {
        width: 100%;
        max-width: 100%;
      }
    }

    &.nav-drawer {
      @media (max-width: ${theme.breakPoints.md}) {
        max-height: calc(100% - 100px);
      }

      @media (max-width: ${theme.breakPoints.sm}) {
        top: 48px;
      }

      @media (max-width: ${theme.breakPoints.sm}) {
        max-height: calc(100% - 70px);
      }

      .drawer-wrap {
        @media (max-width: ${theme.breakPoints.md}) {
          width: calc(100% - 20px);
          max-width: 100%;
          margin-left: ${rem(10)};
          border-radius: 20px;
        }

        .drawer-body {
          padding: ${rem(25)} ${rem(20)};
        }

        .drawer-header-title {
          h3 {
            justify-content: center;
          }
        }
      }
    }

    &.filter-drawer {
      .drawer-wrap {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
    }

    &.cart-drawer {
      .drawer-wrap {
        border-top-left-radius: 15px;
      }
    }

    &.cart-drawer,
    &.choose-size {
      .drawer-wrap {
        @media (max-width: ${theme.breakPoints.md}) {
          width: 90%;
          max-width: 90%;
        }
      }
    }
  `}
`;
