import { rem } from "polished";
import styled from "styled-components";
import { css } from "styled-components";

interface Props {
  size: "fullscreen" | "auto";
  width?: string | number;
}

export const StyledDiv = styled.div<Props>`
  ${({ theme, width, size }) => css`
    background-color: ${theme.color.white};
    position: fixed;
    height: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: ${width || "100%"};

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

    .drawer-header {
      border-bottom: 1px solid ${theme.color.grey["100"]};
      position: relative;
      padding: ${rem(15)} ${rem(25)};

      .drawer-header-wrapper {
        position: relative;

        .drawer-header-title {
          display: flex;

          h3 {
            margin-bottom: 0;
            align-items: center;

            i {
              margin-right: ${rem(20)};
            }
          }
          .sub-title {
            margin: auto ${rem(10)};
            font-size: ${rem(21)};
          }
        }

        .icon-close {
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          font-size: ${rem(16)};
          line-height: ${rem(16)};

          @media (max-width: ${theme.breakPoints.md}) {
            font-size: ${rem(14)};
            line-height: ${rem(14)};
          }

          &:hover {
            opacity: 0.7;
          }
        }

        .btn-block {
          button {
            margin: 0;
          }
        }
      }

      .action-clear {
        display: inline-block;
        padding-left: ${rem(20)};
        margin-bottom: ${rem(10)};
        cursor: pointer;
        transition: 0.3s all ease-in;
        text-decoration: underline;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .drawer-body {
      height: ${size === "fullscreen" ? "100%" : "auto"};
      padding: ${rem(15)};
      overflow: hidden auto;
      scroll-behavior: smooth;
    }

    .drawer-footer {
      border-top: 1px solid ${theme.color.grey["100"]};
      margin: 0 ${rem(10)};
    }

    &:has(.notice) {
      .drawer-header {
        border-bottom: 0;
      }
    }
  `}
`;
