import { rem } from "polished";
import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 10;
    background-color: ${theme.coreColor.bg};
    .header-wrapper {
      display: flex;
      justify-content: space-between;
      height: 73.66px;
      .logo-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        text-decoration: none;
        font-family: "Courier New", Courier, monospace;

        .img {
          width: 50px;
          vertical-align: middle;
        }

        .logo-title {
          display: flex;
          align-self: center;
          color: ${theme.color.white["100"]};
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 27.2px;
          line-height: 27.2px;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            bottom: -2px;
            height: 2px;
            width: 100%;
            visibility: hidden;
            background-color: ${theme.color.white["100"]};
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          &:hover {
            &::before {
              visibility: visible;
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
            }
          }
        }
      }

      .menu-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 0.75em;
        .menu-link {
          outline: none;
          background-color: transparent;
          border: none;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.25em;
          color: ${theme.color.white["100"]};
          text-transform: uppercase;
          position: relative;
          cursor: pointer;
        }
      }
    }
  `}
`;
