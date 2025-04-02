import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 10;
    background-color: ${theme.coreColor.bg};

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    &.sticky {
      position: fixed;
      width: 100vw;
      backdrop-filter: blur(10px);
      animation: slideDown 0.35s ease-out;

      &.showBoxShadow {
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
      }
    }

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      height: 73.66px;

      @media (max-width: ${theme.breakPoints.md}) {
        height: 44px;
      }

      .logo-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        text-decoration: none;
        font-family: "Source Sans Pro", Helvetica, sans-serif;

        img {
          /* width: 50px; */
          vertical-align: middle;

          @media (max-width: ${theme.breakPoints.md}) {
            width: 50px;
          }
        }

        .logo-title {
          display: flex;
          align-self: center;
          color: ${theme.color.white["100"]};
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 22px;
          line-height: 27.2px;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            bottom: -8px;
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

          @media (max-width: ${theme.breakPoints.md}) {
            font-size: 12px;
          }
        }
      }

      .menu-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        /* padding: 0 0.75em; */

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
          transition: all 0.4 ease-in-out;
          &:hover {
            opacity: 0.8;
          }

          @media (max-width: ${theme.breakPoints.md}) {
            display: none;
          }
        }
      }
    }
  `}
`;
