import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    font-family: "Courier New", Courier, monospace;
    border-bottom: 1px solid rgba(212, 212, 255, 0.1);

    .contact-wrapper {
      display: flex;

      .form-wrapper {
        border-right: 1px solid rgba(212, 212, 255, 0.1);
        padding: 4em;
        padding-left: 0;
        height: 50vh;
        flex-grow: 1;
        .contact-title {
          font-size: 27px;
          font-family: "Courier New", Courier, monospace;
          color: ${theme.coreColor.textColor};
          margin-bottom: 2em;
        }

        .form-inner-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          row-gap: 40px;

          .col-6 {
            width: 49%;
          }

          .col-12 {
            width: 100%;
          }
        }
      }

      .contact-info-warpper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        /* row-gap: 80px; */

        .contact-method {
          display: flex;
          gap: 20px;
          padding: 60px 40px;

          &.show-border {
            border-bottom: 1px solid rgba(212, 212, 255, 0.1);
          }

          .content-info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: ${theme.coreColor.textColor};
            h3 {
              font-size: 24px;
              letter-spacing: 1px;
            }

            a {
              text-decoration: none;
              color: inherit;
              font-size: 18px;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  `}
`;
