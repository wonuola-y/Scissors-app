import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface IAuthRouteProps {}

export const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children }:any = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("cant move on");
      navigate("/login");
    }
  });

  if (loading) return <p>loading ... </p>;
  return <> { children }</>;
};
