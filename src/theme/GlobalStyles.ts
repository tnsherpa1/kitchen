import { createGlobalStyle } from "styled-components";
// import "./font-awesome.min.css";

export const GlobalStyles = createGlobalStyle`
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
  font-family: 'SourceSans';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,600,600italic") format("woff2");
}

body{
  background-color: #5E4933;
  &.menu-open{
    height: 100vh;
    overflow: hidden;
  }


  .feature-image-wrapper{
    display: flex;
    flex-wrap: wrap;
  }
}




 
`;
