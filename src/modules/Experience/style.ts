import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    .expreience-content-box-wrapper {
      padding: 60px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
  `}
`;
