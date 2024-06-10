import styled, { DefaultTheme, css } from "styled-components";

const defaultStyle = (theme: DefaultTheme) => css`
  text-decoration: none;
  height: 3.5em;
  line-height: 3.5em;
  color: ${theme.coreColor.textColor};
  display: inline-block;
  padding: 0 1.75em;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &.contained {
    background-color: #fff;
    box-shadow: none;
    color: #5e4933;
    color: ${theme.coreColor.textSecondaryColor};
    border: 2px solid ${theme.coreColor.textColor};
    height: 100%;

    &:hover {
      background-color: ${theme.coreColor.highlight};
      border: 2px solid ${theme.coreColor.highlight};
    }
  }

  &.outline {
    box-shadow: none;
    color: ${theme.coreColor.textColor};
    border: 2px solid ${theme.coreColor.textColor};
    height: 100%;

    &:hover {
      border: 2px solid ${theme.coreColor.highlight};
      color: ${theme.coreColor.highlight};
    }
  }

  &.letter-spacing {
    letter-spacing: 2px;
  }
`;

export const StyledLink = styled.div`
  ${({ theme }) => css`
    a {
      ${defaultStyle(theme)}
    }
  `}
`;

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    ${defaultStyle(theme)}
  `}
`;
