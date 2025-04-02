import { breakPoints } from "./breakPoints";
import { color, coreColor } from "./color";
import { font } from "./font";

export const getTheme = {
  breakPoints,
  color,
  font,
  coreColor: coreColor(),
} as const;
