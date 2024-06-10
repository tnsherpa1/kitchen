import { breakPoints } from "./breakPoints";
import { color, coreColor } from "./color";

export const getTheme = {
  breakPoints,
  color,
  coreColor: coreColor(),
} as const;
