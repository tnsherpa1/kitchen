import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bgAlt};
    padding: 6em;

    .our-story-wrapper {
      font-family: "Courier New", Courier, monospace;
      color: ${theme.coreColor.textColor};
      display: flex;
      flex-direction: column;
      gap: 60px;

      .our-story-title {
        font-size: 28px;

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
        line-height: 31px;
      }
    }
  `}
`;
