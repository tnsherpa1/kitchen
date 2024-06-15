import styled, { css } from "styled-components";
import heroBanner from "@/assets/images/hero-banner-image.jpeg";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    .about-us-wrapper {
      background-image: url(${heroBanner});
      background-color: ${theme.coreColor.bg};
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      position: relative;
      &::before {
        position: absolute;
        height: 100%;
        width: 100%;
        content: "";
        background-color: ${theme.coreColor.accent2};
        opacity: 0.9;
      }

      .about-us-title {
        color: ${theme.coreColor.textColor};
        font-size: 47px;
        font-family: inherit;
        position: relative;
        display: inline-block;
        padding-top: 100px;
        &::before {
          position: absolute;
          content: "";
          height: 5px;
          width: 100%;
          background-color: ${theme.coreColor.textColor};
          left: 0;
          bottom: -12px;
        }
      }

      .story-content {
        font-family: "Source Sans Pro", Helvetica, sans-serif;
        margin-top: 60px;
        font-size: 24px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        line-height: 36px;
        color: ${theme.coreColor.textColor};
        font-weight: lighter;
        padding-bottom: 100px;
      }
    }
  `}
`;
