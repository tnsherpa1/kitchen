import React from "react";

import Header from "@/components/Header";
import Contact from "@/modules/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { getTheme } from "@/theme/theme";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  //TODO: Need to fix this toogle
  const handleToggleMenu = () => {};

  return (
    <>
      <ThemeProvider theme={getTheme}>
        <GlobalStyles />
        <div className="body">
          <div id="layout-wrapper">
            <Header onToggleMenu={handleToggleMenu} />
            {children}
            <Contact />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
