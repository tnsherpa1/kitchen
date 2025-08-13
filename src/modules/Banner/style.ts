import styled, { css } from "styled-components";
import heroBanner from "@/assets/images/hero-banner-image.jpeg";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    background-image: url(${heroBanner});
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    position: relative;
    overflow: hidden;
    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      content: "";
      background-color: #5e4933;
      opacity: 0.8;
    }
    .container-wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
    }
    .hero-banner-wrapper {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      z-index: 5;
      position: relative;

      .hero-banner-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          width: 140px;
          margin-bottom: 20px;
        }
        margin-bottom: 40px;

        .hero-banner-content-text {
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: ${theme.coreColor.textColor};
          text-align: center;
        }
      }

      .hero-banner-content-wrapper {
        width: 100%;
        font-family: "Courier New", Courier, monospace;
        display: flex;
        flex-direction: column;
        gap: 30px;
        .banner-content-information {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 20px;
          font-size: 20px;
          color: #fff;
          list-style: none;
          width: 100%;
          @media (max-width: ${theme.breakPoints.md}) {
            font-size: 16px;
          }

          li {
            gap: 5px;

            &.show-border {
              border-top: 1px solid rgba(212, 212, 255, 0.1);
              padding-top: 20px;
              display: flex;
              flex-direction: column;
            }

            .subtitle1 {
              color: ${theme.color.white};
              font-size: 18px;
            }
            > strong {
              font-size: 20px;
            }
          }
        }

        .button-group {
          margin: 15px 0px;
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          list-style: none;
          @media (max-width: 1024px) {
            flex-direction: column;
          }
        }

        .icons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          list-style: none;
          gap: 20px;

          li {
            .yelp-wrapper {
              img {
                width: 51px;
                height: 50px;
                border-radius: 50%;
                padding: 10px;
                background-color: #fff;
                cursor: pointer;
                transition: 0.2s all ease-in-out;
                &:hover {
                  background-color: #6fc3df;
                }
              }
            }
          }
        }
      }
    }
  `}
`;
