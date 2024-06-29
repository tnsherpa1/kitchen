import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    padding-bottom: 100px;
    border-top: 1px solid rgba(212, 212, 255, 0.1);

    .kitchen-menu-wrapper {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      .kitchen-menu-title {
        text-align: center;
        letter-spacing: 2px;
        font-size: 24px;
        padding: 20px 0;
        color: ${theme.coreColor.textColor};
        font-weight: 500;
        text-transform: uppercase;

        @media (max-width: ${theme.breakPoints.md}) {
          font-size: 16px;
        }
      }

      .dish-note-content {
        color: ${theme.coreColor.textColor};
        padding: 20px;
        font-size: 16px;
        font-weight: 100;
        line-height: 28px;
      }
    }

    .kitchen-information-wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
      font-size: 19px;
      line-height: 32px;
      text-align: center;
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;

      color: ${theme.coreColor.textColor};

      @media (max-width: ${theme.breakPoints.md}) {
        font-size: 14px;
        line-height: 21px;
      }
      p {
        font-weight: 100;
        letter-spacing: 1px;
        &.kitchen-location {
          display: flex;
          flex-direction: column;
          gap: 10px;

          @media (max-width: ${theme.breakPoints.md}) {
            gap: 5px;
          }
        }

        &.kitchen-service-charge {
          border-top: 1px solid rgba(212, 212, 255, 0.1);
          padding-top: 40px;
        }
      }

      .kitchen-service-logo {
        height: 110px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  `}
`;
