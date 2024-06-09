import React from "react";

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/GlobalStyles";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  //TODO: Need to fix this toogle
  const handleToggleMenu = () => {};

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <div className="body">
        <div id="layout-wrapper">
          <Header onToggleMenu={handleToggleMenu} />
          {children}
          <Contact />
          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
