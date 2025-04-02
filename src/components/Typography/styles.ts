import styled, { DefaultTheme, css } from "styled-components";

//Default boots strap font size
// h1 Bootstrap heading (2.5rem = 40px)
// h2 Bootstrap heading (2rem = 32px)
// h3 Bootstrap heading (1.75rem = 28px)
// h4 Bootstrap heading (1.5rem = 24px)
// h5 Bootstrap heading (1.25rem = 20px)
// h6 Bootstrap heading (1rem = 16px)

const style = (theme: DefaultTheme) => css`
  &.h1,
  &.h2,
  &.h3,
  &.h4,
  &.h5,
  &.h6,
  &.p,
  &.subtitle2,
  &.subtitle1 {
    font-family: ${theme.font.sourceSansPro};
  }

  &.h1 {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 4px;
  }

  &.h2 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 2px;
  }

  &.h3 {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 2px;
  }

  &.h4 {
    font-size: 24px;
    line-height: 30px;
  }

  &.h5 {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;

    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &.h6 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
  }

  &.p {
    font-size: 20px;
    line-height: 40px;
    font-weight: 100;

    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 14px;
      line-height: 24px;
    }
  }

  &.subtitle1 {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 2px;

    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 14px;
      line-height: 24px;
    }
  }

  &.subtitle2 {
    font-size: 16px;
    line-height: 24px;

    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 14px;
      line-height: 24px;
    }

    strong {
      font-weight: 500;
    }
  }

  &.section-title {
    color: ${theme.coreColor.textColor};
    font-size: 36px;
    font-family: inherit;
    position: relative;
    display: inline-block;
    padding-top: 100px;
    line-height: 40px;
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

    @media (max-width: ${theme.breakPoints.md}) {
      padding-top: 50px;
      font-size: 22px;
      line-height: 40px;
    }
  }
`;

export const H1 = styled.h1`
  ${({ theme }) => style(theme)}
`;

export const H2 = styled.h2`
  ${({ theme }) => style(theme)}
`;

export const H3 = styled.h3`
  ${({ theme }) => style(theme)}
`;

export const H4 = styled.h4`
  ${({ theme }) => style(theme)}
`;

export const H5 = styled.h5`
  ${({ theme }) => style(theme)}
`;

export const H6 = styled.h6`
  ${({ theme }) => style(theme)}
`;

export const Paragraph = styled.p`
  ${({ theme }) => style(theme)}
`;

export const Span = styled.span`
  ${({ theme }) => style(theme)}
`;
