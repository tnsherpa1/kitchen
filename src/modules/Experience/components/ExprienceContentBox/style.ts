import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: inherit;

    color: ${theme.coreColor.textColor};

    @media (max-width: ${theme.breakPoints.md}) {
      gap: 15px;
    }
    .experience-box-title {
      font-size: 27px;
      font-weight: 600;
      @media (max-width: ${theme.breakPoints.md}) {
        font-size: 16px;
      }
    }

    .experience-box-content {
      font-size: 18px;
      letter-spacing: 2px;
      line-height: 27px;
      @media (max-width: ${theme.breakPoints.md}) {
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 1px;
        font-weight: 100;
      }
    }
  `}
`;
