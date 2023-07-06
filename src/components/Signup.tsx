import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { useRef, useState, createContext } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";


// new additions ---
type  AuthContextType = {
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)



function Signup() {
  // form states
 const [email, setEmail] = useState('')
 const [password, setPassword] =useState('')
 const [errorMessage, setErrorMessage] = useState("");
 const [successMessage, setSuccessMessage] = useState("");
const emailRef = useRef<any>()
const passwordRef = useRef<any>()
const passwordConfirmRef = useRef<any>()


  function signIn(e:any) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
        console.log(useCredential);
        console.log('success');
        setSuccessMessage("Login successful!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(`Check the details again our system says, ${error.message}`);
        setSuccessMessage("");
      });
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className=" w-11/12 flex justify-center items-center
      flex-col"
        >
          <h3 className="my-2">Sign up with:</h3>
          <div className="my-4 mt-2 w-full flex items-center justify-center">
            <button className="bg-blue-600 rounded py-3 px-3 w-1/5 text-white ">
              Google
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="w-3/12 h-[1.3px] bg-gray-400"></p>
            <p className="mx-4 text-gray-600">Or</p>
            <p className="w-3/12 h-[1.3px] bg-gray-400"></p>
          </div>
          <form
            className="flex flex-col justify-center w-full items-center"
            onSubmit={signIn}
          >
              {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
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
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              ref={emailRef}
              className="border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg "
            />
            {/* dont forget to add the eye icont ot your passwowrds */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              ref={passwordRef}
              className="border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg"
            />
            <input
              type="password"
              value={password}
              name="retype password"
              placeholder="Retype password"
              id=""
              ref={passwordConfirmRef}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className="border-2 border-solid border-blue-600 w-8/12 mt-4 py-2 px-2 rounded-lg "
            />
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
};

export default Signup;
