import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bgAlt};
    padding-bottom: 6em;

    @media (max-width: ${theme.breakPoints.md}) {
      padding-top: 0;
    }

    .our-story-wrapper {
      color: ${theme.coreColor.textColor};
      display: flex;
      flex-direction: column;
      gap: 60px;

      @media (max-width: ${theme.breakPoints.md}) {
        gap: 30px;
      }
    }
  `}
`;
