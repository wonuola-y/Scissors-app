import { useEffect, useState } from "react";
import {
  signInWithRedirect,
  getRedirectResult,
  auth,
  provider,
} from "../config/firebase";
const Login = () => {
  const [logIn, setLogIn] = useState(false);
  function signIn(event: any) {
    event.preventDefault();
    console.log("logging in ....");
    signInWithRedirect(auth, provider);
  }
  // Redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setLogIn(true);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, []);

  //Check auth state

  return (
    <div>
      Login
      <div>
        <h3>Log in with:</h3>
        <div>
          <button
            onClick={signIn}
            className=" border-solid border-slate-900 border-2 px-4 mx-3"
          >
            Google
          </button>
          <button>apple</button>
        </div>
        <div>
          <p></p>
          or
          <p></p>
        </div>
        <div style={logIn ? {} : { display: "none" }}>Login successful</div>
        <form action="">
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <button type="submit">Log in</button>
          <p>
            Don't have an account?{" "}
            <span>
              <a href="Signup.tsx">Sign up</a>
            </span>
          </p>
          <p>
            By signing in with an account, you agree to Sciccor's{" "}
            <span>Terms of Service, Privacy Policy </span> and{" "}
            <span> Acceptable Use Policy.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
