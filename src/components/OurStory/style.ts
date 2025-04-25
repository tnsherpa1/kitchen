import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bgAlt};
    padding-bottom: 6em;

    @media (max-width: ${theme.breakPoints.md}) {
      padding-top: 0;
    }

    .our-story-wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
      @media (max-width: ${theme.breakPoints.md}) {
        gap: 30px;
      }
      .our-story-title {
        color: ${theme.color.white};
        width: fit-content;
      }

      .p {
        color: ${theme.color.white};
      }
    }
  `}
`;
