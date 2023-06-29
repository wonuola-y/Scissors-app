import { useRef } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const UserRef = useRef(null)
    const EmailRef = useRef( null)
    const PasswordRef = useRef( null)
    const PasswordConfirmRef = useRef( null)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className=" w-6/12 flex justify-center items-center
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
          action=""
          className="flex flex-col justify-center w-full items-center"
        >
          <input
            type="text"
            name=" Username"
            ref={UserRef}
            placeholder="Username"
            id=""
            className="border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg"
          />
          <input
            type="email"
            name="Email"
            ref={EmailRef}
            placeholder="Email"
            id=""
            className="border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg "
          />
          {/* dont forget to add the eye icont ot your passwowrds */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={PasswordRef}
            id=""
            className="border-2 border-solid border-blue-600 w-8/12 my-4 py-2 px-2 rounded-lg"
          />
          <input
            type="password"
            name="retype password"
            placeholder="Retype password"
            id=""
            ref={PasswordConfirmRef}
            className="border-2 border-solid border-blue-600 w-8/12 mt-4 py-2 px-2 rounded-lg "
          />
          {/* dont forget to add the eye icont ot your passwowrds */}
          <small className="text-gray-600 flex justify-start items-start`">
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
  );
};

export default Signup;
