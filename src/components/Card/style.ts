import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: inherit;
    position: relative;
    @media (max-width: ${theme.breakPoints.md}) {
      /* width: 380px; */
      width: 100%;
    }
    .card-image-wrapper {
      img {
        width: 450px;
        height: 100%;

        @media (max-width: ${theme.breakPoints.md}) {
          width: 100%;
        }
      }
    }

    .card-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 15px;
      color: ${theme.coreColor.textColor};

      .content-text {
        font-size: 18px;
        line-height: 24px;

        @media (max-width: ${theme.breakPoints.md}) {
          font-size: 16px;
        }
      }

      a {
        color: ${theme.coreColor.textColor};
        font-size: 18px;
        display: inline-block;

        @media (max-width: ${theme.breakPoints.md}) {
          font-size: 16px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  `}
`;
