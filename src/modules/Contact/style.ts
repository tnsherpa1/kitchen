import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    font-family: "Courier New", Courier, monospace;
    border-bottom: 1px solid rgba(212, 212, 255, 0.1);

    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .form-wrapper {
        border-right: 1px solid rgba(212, 212, 255, 0.1);
        padding: 4em;
        padding-left: 0;
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
          gap: 28px;
          row-gap: 40px;

          .col-6 {
            width: 48%;
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
          position: relative;

          &::before {
            position: absolute;
            content: "";
            border-bottom: 1px solid rgba(212, 212, 255, 0.1);
            width: calc(100vw + 3em);
            margin-left: -40px;
            bottom: 0;
          }

          &:last-child {
            &::before {
              content: "";
              position: absolute;
              border-bottom: none;
            }
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
