export const truncateString = (str: string, num = 100) => {
  if (!str) {
    return "";
  }

  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
