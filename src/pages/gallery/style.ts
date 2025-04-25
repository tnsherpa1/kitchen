import styled, { css } from "styled-components";

const StyledSection = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid rgba(212, 212, 255, 0.1);
    .gallery-title {
      margin-top: 30px;
      color: ${theme.color.white} !important;
      position: relative;
      display: inline-block;

      &::before {
        position: absolute;
        content: "";
        height: 3px;
        width: 100%;
        background-color: ${theme.coreColor.textColor};
        left: 0;
        bottom: -12px;

        @media (max-width: ${theme.breakPoints.md}) {
          height: 2px;
          bottom: -4px;
        }
      }
    }
  `}
`;

export default StyledSection;
