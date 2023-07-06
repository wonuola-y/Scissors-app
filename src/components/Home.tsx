import React from "react";
import Nav from "./Nav";

import Hero from "./Heo";
import Info from "./Info";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Starting from "./Starting";
import Footer from "./Footer-section";
import { FormHolder } from "./FormHolder";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div className=" font-mw">
      {/* Header */}

      <Nav />
      <Hero />
      <Info />
      <Pricing />
      <FormHolder />
      <Faq />
      <Starting />
      <Footer />
    </div>
  );
};
