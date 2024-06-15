export const getLightBoxImage = (imageList: Array<{ src: string }>) => {
  return imageList.map((x) => {
    return {
      url: x.src || "",
      original: x.src || "",
    };
  });
};
