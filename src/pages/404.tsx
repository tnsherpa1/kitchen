import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import BaseLayout from "@/layouts/BaseLayout";

import Button from "@/components/Button";
import Seo from "@/components/Seo";

const NotFoundPage: React.FC<PageProps> = () => {
  const seo = {
    seo_title: "404 Page Not Found",
    meta_description: "Sherpa Kitchen Page Not found",
    meta_keywords: "Page Not Found",
  };
  return (
    <BaseLayout>
      <Seo {...seo} />
      <main className="page-not-found-wrapper">
        <h1 className="not-found-title">
          <strong className="not-found-status-code">404</strong>
          <span> Page Not Found</span>
        </h1>
        <p className="not-found-helper-text">
          Sorry 😔, we couldn’t find what you were looking for.
        </p>
        <Button skin="contained" href="/" size="md">
          BACK TO HOME
        </Button>
        .
      </main>
    </BaseLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
