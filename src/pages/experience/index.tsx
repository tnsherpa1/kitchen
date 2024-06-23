import BaseLayout from "@/layouts/BaseLayout";
import Experience from "@/modules/Experience";
import React from "react";
import { Helmet } from "react-helmet";

const ExperiencePage = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>St. Helena Sherpa Kitchen Experience</title>
        <meta
          name="description"
          content="St. Helena Sherpa Kitchen Experience"
        />
      </Helmet>
      <Experience />
    </BaseLayout>
  );
};

export default ExperiencePage;
