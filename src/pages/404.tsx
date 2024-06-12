import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import BaseLayout from "@/layouts/BaseLayout";
import { Container } from "@/components/Container";

import Button from "@/components/Button";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout>
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
