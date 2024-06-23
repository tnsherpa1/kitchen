import BaseLayout from "@/layouts/BaseLayout";
import KitchenMenu from "@/modules/KitchenMenu";
import React from "react";
import { Helmet } from "react-helmet";

const MenuPage = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Menu - Himalayan Sherpa Kitchen St. Helena, CA</title>
        <meta name="description" content="Himalayan Sherpa Kitchen - Menu" />
      </Helmet>

      <KitchenMenu />
    </BaseLayout>
  );
};

export default MenuPage;
