import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.sourceSansPro};
    &.error {
      .label-wrapper {
        color: red;
      }
    }

    .label-wrapper {
      color: ${theme.coreColor.textColor};
      display: block;
      font-size: 14px;
      letter-spacing: 0.25em;
      margin: 0 0 1em;
      text-transform: uppercase;
    }

    .input-wrap {
      min-height: 91px;

      .error-msg {
        color: red;
        margin-top: 10px;
      }
    }
  `}
`;

export const InputStyle = styled.input`
  ${({ theme }) => css`
    height: 60px;
    width: 100%;
    background: rgba(212, 212, 255, 0.035);
    border: none;
    outline: 0;
    padding: 0 1em;
    font-family:
      Source Sans Pro,
      Helvetica,
      sans-serif;
    font-size: 17pt;
    color: ${theme.coreColor.textColor};
    letter-spacing: 1px;

    &::placeholder {
      font-size: 18px;
    }

    &:focus {
      border: 1px solid ${theme.coreColor.highlight};
    }

    &.error {
      border: 1px solid red;
    }
  `}
`;
