import { rem } from "polished";
import styled, { css } from "styled-components";

export const StyledDiv = styled.div<{ $iconAlignLeft: boolean }>`
  ${({ $iconAlignLeft, theme }) => css`
    width: 100%;
    transition: 0.3s ease all;

    &.disable {
      opacity: 0.3;
      pointer-events: none;
    }

    &.active {
      .accordion-header {
        border-bottom: 1px solid ${theme.coreColor.textColor};
      }
    }

    .accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: 0.3s ease all;
      position: relative;
      cursor: pointer;
      border: 1px solid ${theme.coreColor.textColor};
      border-bottom: none;
      padding: 20px 10px;
      font-size: 18px;
      color: ${theme.coreColor.highlight};
      letter-spacing: 2px;

      h3 {
        font-weight: 400;
      }

      i {
        font-size: ${rem(14)};
        position: absolute;
        top: 50%;
        ${$iconAlignLeft
          ? css`
              left: 0;
            `
          : css`
              right: 0;
            `}
        transform: translateY(-50%) rotate(0deg);
        transition: 0.3s ease all;
      }
    }

    .accordion-content {
      overflow: hidden;
      border-left: 1px solid ${theme.coreColor.textColor};
      border-right: 1px solid ${theme.coreColor.textColor};
      border-bottom: 1px solid ${theme.coreColor.textColor};

      table {
        font-size: 21px;
        line-height: 27px;
        width: 100%;

        color: ${theme.coreColor.textColor};
        thead {
          th {
            font-weight: 800;
            text-align: left;
            padding: 10px 20px;
          }
        }

        tbody {
          td {
            padding: 10px 20px;
            font-size: 18px;
            font-weight: 100;
            line-height: inherit;
          }
        }
      }
    }
  `}
`;

export const AccordionStyledTitle = styled.h3`
  ${({ theme }) => css`
    &.circle {
      position: relative;
      padding-left: ${rem(40)};

      &::before,
      &::after {
        content: "";
        position: absolute;
        border-color: green;

        border-radius: 100%;
        transition: 0.3s ease all;
        /* margin-top: 2px; */
      }

      &::before {
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        background-color: transparent;
      }

      &::after {
        width: 12px;
        height: 12px;
        background-color: red;
        top: 4px;
        left: 4px;
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
        padding: 1px;
      }

      &.circle-active {
        &::after {
          opacity: 1;
          -webkit-transform: scale(1.6);
          transform: scale(1.6);
          border-color: green;
        }
      }
    }
  `}
`;
