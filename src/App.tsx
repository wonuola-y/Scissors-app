import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

import { Form } from "./components/Form";
import Info from "./components/Info";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Nav from "./components/Nav";
import { Demo } from "./components/Demo";
import { NotFound } from "./components/NotFound";
import HashLoader from "react-spinners/HashLoader";
import "./App.css";
import AuthDetails from "./components/AuthDetails";

import SignUp from "./components/SignInHolder";
import Price from "./components/Price";
import { FormHolder } from "./components/FormHolder";

export interface IAppProps {}
export const App: React.FunctionComponent<IAppProps> = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("done");

      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="App">
          <HashLoader
            color={"blue"}
            loading={loading}
            size={160}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className='container
        '>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/Demo" element={<Demo />}></Route>
            <Route path="/MyUrls" element={<Form />} />
            <Route path="/FormHolder" element={<FormHolder />} />
            <Route path="/Features" element={<Info />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/NotShown" element={<Price />} />
          </Routes>
          <AuthDetails children={undefined} />
        </div>
      )}
    </div>
  );
};
