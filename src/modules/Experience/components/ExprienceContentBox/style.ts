import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: inherit;

    color: ${theme.coreColor.textColor};
    .experience-box-title {
      font-size: 27px;
      font-weight: 600;
    }

    .experience-box-content {
      font-size: 18px;
      letter-spacing: 2px;
      line-height: 27px;
    }
  `}
`;
