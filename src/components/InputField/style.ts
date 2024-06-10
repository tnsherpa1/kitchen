import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  font-family: "Courier New", Courier, monospace;
  .label-wrapper {
    color: #fff;
    display: block;
    font-size: 18px;
    letter-spacing: 0.25em;
    margin: 0 0 1em;
    text-transform: uppercase;
  }
`;

export const InputStyle = styled.input`
  ${({ theme }) => css`
    height: 60px;
    width: 100%;
    background: rgba(212, 212, 255, 0.035);
    border: none;
    outline: 0;
    padding: 0 1em;

    &:focus {
      border: 1px solid ${theme.coreColor.highlight};
    }
  `}
`;
