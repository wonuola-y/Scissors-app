import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

// import { Link } from "react-router-dom";

const NavList = [
  {
    name: "My URLs",
    link: "/Form",
  },
  {
    name: "Features",
    link: "/Features",
  },
  {
    name: "Pricing",
    link: "/Pricing",
  },

  {
    name: "FAQs",
    link: "/FAQs",
  },
];
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className=" w-full flex  justify-between 
    md:justify-around md:z-30 md:fixed  p-4 md:bg-blue-100 
    md:rounded-lg md:bg-clip-padding md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-20"
    >
      <div className="md:p-4 flex md:justify-center border-2 border-solid border-red-400 md:items-center relative z-10 md:z-auto">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <span
          className="block  cursor-pointer relative z-10 md:hidden"
          onClick={toggleNavbar}
        >
          =
        </span>
      </div>
      <div
        className={`md:flex flex-col md:flex-row  absolute bg-blue-50 p-4 md:fixed  md:bg-transparent  text-start
      md:justify-between 
      w-full  ${isOpen ? "flex" : "hidden"}`}
      >
        <nav
          className={`flex justify-start  items-start flex-col md:flex-row md:justify-around md:items-center  p-8 md:p-0 w-9/12 `}
        >
          {NavList.map((item, id: number) => (
            <Link
              className="hover:text-blue-600 my-5 md:my-0"
              to={item.link}
              key={id}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-around w-full md:w-3/12  ">
          <button className="text-blue-600">Log In</button>
          <button className="bg-blue-600 rounded-3xl px-4 py-3 md:px-3 text-white">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
