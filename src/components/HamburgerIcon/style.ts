import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    &.hamburgerMenu {
      position: relative;
      top: 0;
      cursor: pointer;
      display: inline-block;
      width: 18px;
      display: block;

      span {
        width: 100%;
        height: 2px;
        display: block;
        background-color: ${theme.color.white[100]};
        margin-bottom: 4px;
        transition: 0.3s ease all;
        border-radius: 3px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &.is-active {
        span {
          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
          }

          &:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
          }
        }
      }
    }
  `};
`;
