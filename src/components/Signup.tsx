import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { useRef, useState, createContext } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

// new additions ---
type AuthContextType = {
  isAuthenticated: boolean;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

function Signup() {
  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const passwordConfirmRef = useRef<any>();

  function togglePasswordView() {
    setPasswordVisible(!passwordVisible);
  }
  function togglePasswordConfirmView() {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  }
  function signIn(e: any) {
    e.preventDefault();
    if (password != passwordConfirm) {
      setErrorMessage(`Passwords don't match`);
      return;
    } else if (password === "" || passwordConfirm === "" || email === "") {
      setErrorMessage(`Field Required`);
      return;
    } else {
      setErrorMessage("");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        console.log("success");
        setSuccessMessage("Login successful!");
        setErrorMessage("");
      })
      .catch((error) => {
        {
          console.log(error);
          setErrorMessage(
            `Check the details again our system says, ${error.message}`
          );
          setSuccessMessage("");
        }
      });
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className=" w-11/12 flex justify-center items-center
      flex-col"
        >
          <h3 className="my-2 text-4xl font-bold">Sign up</h3>
          <p className="text-center text-md">
            Shortening links have become seamless! <br />
            Join us today
          </p>

          <form
            className="flex flex-col justify-center w-full items-center"
            onSubmit={signIn}
          >
            <div className="font-semibold ">
              {errorMessage && (
                <p className="error p-5 my-5 rounded-xl bg-red-100 text-red-500 ">
                  {errorMessage}
                </p>
              )}
              {successMessage && (
                <p className="success bg-green-200 text-green-600">
                  {successMessage}
                </p>
              )}
            </div>
            <input
              type="text"
              name=" Username"
              placeholder="Username"
              id=""
              className="border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={email}
              id=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              ref={emailRef}
              className="border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg "
            />
            {/* dont forget to add the eye icont ot your passwowrds */}
            <div className=" flex justify-between border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg ">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                id=""
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                ref={passwordRef}
              />
              <button onClick={togglePasswordView}>
                {passwordVisible ? (
                  <img
                  src="https://img.icons8.com/?size=2x&id=mVo7XYRsVjnm&format=png"
                  alt="padlock open"
                  className="w-5"
                />
                ) : (
                  <img
                  src="https://img.icons8.com/?size=2x&id=85056&format=png"
                  alt="padlock"
                  className="w-5"
                />
                  
                )}
              </button>
            </div>
            <div className=" flex justify-between border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg ">
            <input
              type={passwordConfirmVisible ? "text" : "password"}
              value={passwordConfirm}
              name="retype password"
              placeholder="Retype password"
              id=""
              ref={passwordConfirmRef}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
             
            />
            <button onClick={togglePasswordConfirmView}>
              {passwordConfirmVisible ? (
               <img
               src="https://img.icons8.com/?size=2x&id=mVo7XYRsVjnm&format=png"
               alt="padlock open"
               className="w-5"
             />
              ) : (
                <img
                  src="https://img.icons8.com/?size=2x&id=85056&format=png"
                  alt="padlock"
                  className="w-5"
                />
              )}
            </button>
            </div>
            {/* dont forget to add the eye icont ot your passwowrds */}
            <small className="text-gray-600 flex justify-start items-start my-4 w-7/12">
              6 or more characters, one number, one uppercase & one lower case.
            </small>
            <button
              type="submit"
              className="py-2 my-4 rounded-3xl text-white bg-blue-600 w-3/5"
            >
              Sign up
            </button>
            <p className="text-gray-600">
              Already have an account?{" "}
              <span>
                <Link to="/login" className="text-blue-600">
                  Log in
                </Link>
              </span>
            </p>
            <small className="text-gray-400 my-4 w-7/12">
              By signing in with an account, you agree to Scissor's{" "}
              <span className="text-gray-600">
                Terms of Service, Privacy Policy{" "}
              </span>{" "}
              and <span className="text-gray-600"> Acceptable Use Policy.</span>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
