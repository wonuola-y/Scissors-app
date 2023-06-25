import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/Login";
// import { AuthRoute } from "./components/context/AuthContext";


export interface IAppProps {}
export const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
        
              <Home />
         
          }

        />
        

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
