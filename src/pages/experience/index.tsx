import Seo from "@/components/Seo";
import BaseLayout from "@/layouts/BaseLayout";
import Experience from "@/modules/Experience";
import React from "react";
import seo from "content/seo/experience-page-seo.json";

const ExperiencePage = () => {
  return (
    <BaseLayout>
      <Seo {...seo} />
      <Experience />
    </BaseLayout>
  );
};

export default ExperiencePage;
