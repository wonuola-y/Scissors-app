import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/Login";
import { initializeApp } from "firebase/app";
import { AuthRoute } from "./components/context/AuthContext";
import { config } from "./config/firebase";

initializeApp(config.firebaseConfig);

export interface IAppProps {}
export const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
