import { THEME_MODE } from "@/constants/theme-mode";
import { getLocalStorageItem } from "@/utils/local-storage-helpers";

export const color = {
  yellow: {
    100: `rgb(248, 159, 0)`,
  },
  cyan: {
    100: `rgb(0, 172, 157)`,
  },
  grey: {
    100: `rgb(51, 51, 51)`,
  },
  black: {
    100: `rgb(38, 38, 38)`,
  },
  white: {
    100: `rgb(255, 255, 255)`,
  },
  lightGrey: {
    100: `rgb(235, 235, 235)`,
  },
};

export const defaultPalette = {
  bg: "#5E4933",
  bgAlt: "#2a2f4a",
  textColor: "#fff",
  textSecondaryColor: "#5e4933",
  fg: "#ffffff",
  fgBold: "#ffffff",
  fgLight: "rgba(244,244,255,0.2)",
  border: "rgba(212,212,255,0.1)",
  borderBg: "rgba(212,212,255,0.035)",
  highlight: "#f5a43b",
  accent1: "#6fc3df",
  accent2: "#8d82c4",
  accent3: "#ec8d81",
  accent4: "#e7b788",
  accent5: "#8ea9e8",
  accent6: "#87c5a4",
};

export const coreColor = () => {
  const mode = getLocalStorageItem(THEME_MODE);

  /**
   * Add dark mode palette
   */
  if (mode === "dark") {
    return defaultPalette;
  }

  return defaultPalette;
};
