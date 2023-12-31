import React from "react";
import Hero from "./Heo";
import Info from "./Info";
import Pricing from "./Pricing";
import Faq from "./Faq";

import Footer from "./Footer-section";
import { FormHolder } from "./FormHolder";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div className=" font-play mx-3 md:mx-0 max-w-sm md:container  ">
      {/* Header */}
      <Hero />
      <Info />
      <Pricing />
      <FormHolder />
      <Faq />
      
      <Footer />
    </div>
  );
};
