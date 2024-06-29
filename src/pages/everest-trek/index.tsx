import BaseLayout from "@/layouts/BaseLayout";
import EverestTrek from "@/modules/EverestTrek";
import React from "react";
import { Helmet } from "react-helmet";

const EverestTrekPage = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Everest Base Camp Trek</title>
        <meta name="description" content="Everest Trek" />
      </Helmet>

      <EverestTrek />
    </BaseLayout>
  );
};

export default EverestTrekPage;
