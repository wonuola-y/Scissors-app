import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import "./style.css";
import Button from "./Button";

const NavList = [
  {
    name: "My URLs",
    link: "/sign",
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
    link: "/Faq",
  },
];
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className="
      nav
     w-full
     flex justify-between flex-col items-center md:justify-between
   absolute
     z-30 md:fixed 
     py-4 px-3
    md:bg-blue-100 
     md:rounded-lg bg-clip-padding
     md:backdrop-filter
     md:backdrop-blur-lg 
     md:bg-opacity-20"
    >
      {/* logo */}
      <div className="flex justify-between items-center w-full md:hidden">
      <div className="md:p-4 flex w-3/12 md:w-2/12">
      <Link to='/'> <img src={logo} alt="logo" /></Link>
      </div>

      {/* menu */}
      <div className="block p-4 md:p-0 md:hidden">
        <span
          className="block  cursor-pointer relative z-10 md:hidden"
          onClick={toggleNavbar}
        >
         <img src="https://img.icons8.com/?size=2x&id=82749&format=png" alt="menu" className="w-5" />
        </span>
      </div>

      </div>
      {/* nav */}
      <div
        className={`md:flex
         flex-col md:flex-row
         min-h-screen 
      items-center
         w-full
        bg-blue-500
           bg-clip-padding
           backdrop-filter
           backdrop-blur-lg
           rounded-lg
           bg-opacity-10
             p-1

              md:relative  md:z-auto
              md:bg-transparent  
              
              md:bg-none
              md:backdrop-blur-0
               md:justify-between 
              md:w-full 
 bg-cover 
 md:h-1/6  md:min-h-0 
  ${isOpen ? "flex" : "hidden"}`}
      >
        <nav
          className={`md:borer-2 md:border-red-400  text-center md:border-solid flex justify-center  items-center flex-col md:flex-row md:justify-around md:items-center  p-4 md:p-0 w-9/12  text-sm transition-all md:w-screen `}
        >
          <Link to='/'><img src={logo} alt="logo" className="hidden md:block" /></Link>
          {NavList.map((item, id: number) => (
            <Link
              className="hover:text-blue-600  my-5 md:my-0 font-semibold text-md md:font-semibold md:text-sm"
              to={item.link}
              key={id}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center  md:justify-around w-full md:w-3/12  ">
          {/* button */}
          <Button
          >
            <Link
              to="/sign"
              className="rounded-3xl px-4 py-3 md:px-3"
            >
              Sign Up
            </Link>
          </Button>
          </div>
        </div>
      </div>
  
    
    
  );
};

export default Nav;
