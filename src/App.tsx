import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

import { Form } from "./components/Form";
import Info from "./components/Info";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Nav from "./components/Nav";


import { NotFound } from "./components/NotFound";
import HashLoader from "react-spinners/HashLoader";
import './App.css';
import AuthDetails from "./components/AuthDetails";

import SignUp from "./components/SignInHolder";


export interface IAppProps {}
export const App: React.FunctionComponent<IAppProps> = (props) => {
 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   setLoading(true)
   setTimeout(()=>{
    console.log('done');
    
    setLoading(false)
   }, 4000)
  }, [])
  
  
  return (
  <div >
  {
    loading ?
   <div className="App">
     <HashLoader
    color={'blue'}
    loading={loading}
    size={160}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
   </div>
    : <div>
        <Routes> 
    <Route path="/" element={<Home />}></Route>
    <Route path="*" element={<NotFound />}></Route>
    <Route path="/Nav" element={<Nav />}></Route>
    <Route path="/MyUrls" element={<Form />} />
    <Route path="/Features" element={<Info />} />
    <Route path="/Pricing" element={<Pricing />} />
    <Route path="/Faq" element={<Faq />} />
    <Route path="/sign" element={<SignUp />} />
  
  </Routes>
<AuthDetails children={undefined} />
    </div>
  
  }
  </div>
  );
};
