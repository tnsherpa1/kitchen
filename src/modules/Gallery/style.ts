import styled, { css } from "styled-components";

export const StyledSection = styled.div`
  ${({ theme }) => css`
    padding-bottom: 100px;
    border-top: 1px solid rgba(212, 212, 255, 0.1);

    .gallery-image-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 60px;

      @media (max-width: ${theme.breakPoints.md}) {
        grid-template-columns: 1fr;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  `}
`;
