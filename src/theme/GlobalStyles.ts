import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: "SourceSans";
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,600,600italic")
      format("woff2");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-weight: 600;
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,600,600italic");
  }

  body {
    background-color: #5e4933 !important;
    overflow-x: hidden;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    width: 100%;

    &.menu-open {
      height: 100vh;
      overflow: hidden;
    }

    .feature-image-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }

  a {
    text-decoration: none;
  }

  .text-underline {
    position: relative;
    display: inline-block;
    &::before {
      position: absolute;
      content: "";
      height: 3px;
      width: 100%;
      background-color: ${theme.coreColor.textColor};
      left: 0;
      bottom: -12px;

      @media (max-width: ${theme.breakPoints.md}) {
        height: 2px;
        bottom: -4px;
      }
    }
  }
`}

 
`;
