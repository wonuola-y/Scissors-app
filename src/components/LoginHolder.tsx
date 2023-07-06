import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import Login from "./Login";
import { Form } from "./Form";
import { FormHolder } from "./FormHolder";

function LoginHolder() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setIsLoggedIn(!!user);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  return (
    <div>
        {
          isLoggedIn ? <Login /> : <FormHolder />  
        }
    </div>
  )
}

export default LoginHolder