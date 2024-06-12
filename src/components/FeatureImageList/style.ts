import { defaultPalette } from "@/theme/color";
import styled, { css } from "styled-components";

export const StyledArticle = styled.article<{
  $bgcolor: keyof typeof defaultPalette;
}>`
  ${({ theme, $bgcolor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 4em 4em 2em;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 40em;
    min-height: 23em;
    overflow: hidden;
    position: relative;
    width: 40%;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: ${theme.coreColor[$bgcolor]};
      opacity: 0.7;
      top: 0;
      transition: all 0.2s ease-in;
    }

    &:hover {
      &::before {
        opacity: 0;
      }
    }

    &.large {
      width: 60%;
    }

    a {
      text-decoration: none;
    }

    .feature-title {
      font-family: "Courier New", Courier, monospace;
      color: ${theme.coreColor.textColor};
      font-size: 27px;
      letter-spacing: 1px;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 3px;
        background-color: ${theme.coreColor.textColor};
      }
    }
  `}
`;
