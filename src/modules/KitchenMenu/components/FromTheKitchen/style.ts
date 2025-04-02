import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.coreColor.textColor};
  `}
`;
