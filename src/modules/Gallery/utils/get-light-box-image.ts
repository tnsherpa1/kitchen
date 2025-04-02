export const getLightBoxImage = (imageList: Array<{ imageSrc: string }>) => {
  return imageList.map((x) => {
    return {
      url: x.imageSrc || "",
      original: x.imageSrc || "",
    };
  });
};
