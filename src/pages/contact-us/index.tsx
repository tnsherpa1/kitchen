import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import { Helmet } from "react-helmet";

const ContactUsPage = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact us" />
      </Helmet>
    </BaseLayout>
  );
};

export default ContactUsPage;
