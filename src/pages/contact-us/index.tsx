import { Seo } from "restaurant-ui/components";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import seo from "content/seo/contact-us-seo.json";

const ContactUsPage = () => {
  return (
    <BaseLayout>
      <Seo {...seo} />
    </BaseLayout>
  );
};

export default ContactUsPage;
