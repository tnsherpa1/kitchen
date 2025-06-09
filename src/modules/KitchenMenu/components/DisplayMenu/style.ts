import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledTr = styled.tr<{ $hasDesc: boolean }>`
  .name {
    width: ${({ $hasDesc }) => ($hasDesc ? "auto" : "80%")};
    @media (max-width: ${theme.breakPoints.md}) {
      width: auto;
    }
  }
`;
