const Login = () => {
  return (
    <div>
      Login
      <div>
        <h3>Log in with:</h3>
        <div>
          <button>Google</button>
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
