import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authen, setAuthen] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setAuthen(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    setAuthen(false);
  };

  return (
    <div>
      Login
      <div>
        <h3>Log in with:</h3>
        <div>
          <button onClick={()=> signInWithGoogle()} disabled={authen} className=" border-solid border-slate-900 border-2 px-4 mx-3">
            Google
          </button>
          <button>apple</button>
        </div>
        <div>
          <p></p>
          or
          <p></p>
        </div>
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
