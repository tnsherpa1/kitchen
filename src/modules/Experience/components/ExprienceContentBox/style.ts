import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: inherit;

    color: ${theme.coreColor.textColor};

    @media (max-width: ${theme.breakPoints.md}) {
      gap: 10px;
    }
  `}
`;
