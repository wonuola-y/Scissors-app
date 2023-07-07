import { useEffect, useState } from "react";
import { auth } from "../config/firebase";


import Signup from "./Signup";
import { FormHolder } from "./FormHolder";

function SignUp() {
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
    <div className="pt-20 md:pt-[8rem]">
        {
          isLoggedIn ? <FormHolder /> : <Signup />  
        }
    </div>
  )
}

export default SignUp