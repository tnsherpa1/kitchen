import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    padding-bottom: 100px;

    .everest-trek-title {
      font-size: 32px;
    }

    .everest-trek-achievement-wrapper {
      margin-top: 60px;
      display: flex;
      gap: 60px;

      .achievement-image-wrapper {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .achievement-trek-content {
        color: ${theme.coreColor.textColor};
        font-size: 21px;
        font-weight: lighter;
        letter-spacing: 1px;
        line-height: 37px;
        position: relative;
        display: flex;
      }
    }
  `}
`;
