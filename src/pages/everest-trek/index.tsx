import { Seo } from "restaurant-ui/components";
import BaseLayout from "@/layouts/BaseLayout";
import EverestTrek from "@/modules/EverestTrek";
import React from "react";
import seo from "content/seo/everest-trek-seo.json";

const EverestTrekPage = () => {
  return (
    <BaseLayout>
      <Seo {...seo} />

      <EverestTrek />
    </BaseLayout>
  );
};

export default EverestTrekPage;
