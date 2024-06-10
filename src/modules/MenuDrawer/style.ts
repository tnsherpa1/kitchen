import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    border-top: 1px solid rgba(212, 212, 255, 0.1);
    height: calc(100% - 73.6px);
    position: absolute;
    width: 100%;
    overflow: scroll;
    bottom: 0;
  `}
`;
