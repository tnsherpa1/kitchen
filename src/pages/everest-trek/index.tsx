import BaseLayout from "@/layouts/BaseLayout";
import WorkInProgressLayout from "@/layouts/WorkInProgressLayout";
import EverestTrek from "@/modules/EverestTrek";
import React from "react";

const EverestTrekPage = () => {
  return (
    <BaseLayout>
      <EverestTrek />
    </BaseLayout>
  );
};

export default EverestTrekPage;
