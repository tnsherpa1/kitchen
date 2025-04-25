import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import BaseLayout from "@/layouts/BaseLayout";

import { Seo, PageNotFound } from "restaurant-ui/components";

const NotFoundPage: React.FC<PageProps> = () => {
  const seo = {
    seo_title: "404 Page Not Found",
    meta_description: "Sherpa Kitchen Page Not found",
    meta_keywords: "Page Not Found",
  };
  return (
    <BaseLayout>
      <Seo {...seo} />
      <PageNotFound />
    </BaseLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
