import { getTheme } from "@/theme/theme";
import "styled-components";

type CustomTheme = typeof getTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
