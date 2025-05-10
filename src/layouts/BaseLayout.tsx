import React from "react";

import Contact from "@/modules/Contact";
import { Footer } from "restaurant-ui/components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { theme } from "@/theme/theme";
import Header from "@/components/Header";
import settings from "content/settings/settings.json";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  const {
    footer_text = "© Himalayan Sherpa Kitchen 2024",
    yelp_link = "",
    facebook_link = "",
    instagram_link = "",
  } = settings || {};
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="body">
        <Header />
        {children}
        <Contact />
        <Footer
          footerText={footer_text}
          yelpLink={yelp_link}
          facebookLink={facebook_link}
          instagramLink={instagram_link}
          bgColor={theme.color.bgColor}
          textColor={theme.color.white}
          iconRadius
        />
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
