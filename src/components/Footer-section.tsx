import logo from "../assets/logo.svg";
import Twitter from "../assets/twitter.svg";
import Linkendin from "../assets/linkendin.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center border-2 border-yellow-300 border-solid md:justify-between md:items-start w-full border-t mt-20 p-10">
      <div className="md:w-2/12 mb-5 md:mb-0">
        <img src={logo} alt="logo" />
        <i className="not-italic text-[12px]">Copyright Wonuola 2023 </i>
      </div>
      <div className="md:w-2/12 mb-5 md:mb-0 w-full">
        <ul className="flex justify-around  ">
          <a href="https://twitter.com/Wonuola_w">
            {" "}
            <img src={Twitter} alt="Twitter" />
          </a>

          <a href="https://wonuola.hashnode.dev/">
            {" "}
            <img
              src="https://img.icons8.com/?size=2x&id=HnB8zGOh5xgd&format=png"
              alt="Hashnode"
              className="w-7"
            />
          </a>
          <a href="https://github.com/wonuola-y/">
            <img src="https://img.icons8.com/?size=2x&id=62856&format=png" alt="github" className="w-7"/>
          </a>
          <a href="linkedin.com/in/wonuola-alonge-568537196/">
            {" "}
            <img src={Linkendin} alt="Twitter" />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
