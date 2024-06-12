import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: inherit;
    position: relative;
    .card-image-wrapper {
      img {
        width: 450px;
        height: 100%;
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
      }

      a {
        color: ${theme.coreColor.textColor};
        font-size: 18px;
        display: inline-block;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `}
`;
