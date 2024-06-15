import styled, { css } from "styled-components";

export const StyledSection = styled.div`
  ${() => css`
    padding-bottom: 100px;
    border-top: 1px solid rgba(212, 212, 255, 0.1);

    .gallery-title {
      font-size: 41px;
    }

    .gallery-image-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 60px;
    }
  `}
`;
