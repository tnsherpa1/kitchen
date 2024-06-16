import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bgAlt};
    padding: 6em 0;

    @media (max-width: ${theme.breakPoints.md}) {
      padding: 3em 0;
    }

    .our-story-wrapper {
      font-family: ${theme.font.sourceSansPro};
      color: ${theme.coreColor.textColor};
      display: flex;
      flex-direction: column;
      gap: 60px;

      .our-story-title {
        font-size: 28px;

        @media (max-width: ${theme.breakPoints.md}) {
          font-size: 24px;
        }

        h2 {
          position: relative;
          display: inline;
          &::after {
            left: 0;
            bottom: -15px;
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${theme.coreColor.textColor};
          }
        }
      }

      .our-story-description {
        font-size: 21px;
        line-height: 38px;
        font-weight: 100;

        @media (max-width: ${theme.breakPoints.md}) {
          font-size: 16px;
          line-height: 28px;
        }
      }
    }
  `}
`;
