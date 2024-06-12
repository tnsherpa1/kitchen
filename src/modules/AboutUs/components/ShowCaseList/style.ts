import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bgAlt};
    padding-top: 60;
    padding-bottom: 100px;

    .show-case-title {
      font-size: 32px;
    }

    .show-case-card-container {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 80px;
    }
  `}
`;
