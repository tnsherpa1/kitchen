import BaseLayout from "@/layouts/BaseLayout";
import WorkInProgressLayout from "@/layouts/WorkInProgressLayout";
import Gallery from "@/modules/Gallery";
import React from "react";

const GalleryPage = () => {
  return (
    <BaseLayout>
      <Gallery />
    </BaseLayout>
  );
};

export default GalleryPage;
