import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import "./style.css";

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
      className="
      nav
      
     w-full
     flex justify-between md:justify-between
   absolute
     z-30 md:fixed 
     p-4 
    md:bg-blue-100 
     md:rounded-lg bg-clip-padding
     md:backdrop-filter
     md:backdrop-blur-lg 
     md:bg-opacity-20"
    >
      {/* logo */}
      <div className="md:p-4 flex  w-2/12">
        <img src={logo} alt="logo" />
      </div>

      {/* menu */}
      <div className="block p-4 md:p-0 md:hidden">
        <span
          className="block  cursor-pointer relative z-10 md:hidden"
          onClick={toggleNavbar}
        >
          =
        </span>
      </div>

      {/* nav */}
      <div
        className={`md:flex
         flex-col md:flex-row
          absolute
          bg-blue-700
      
           bg-clip-padding
           backdrop-filter
           backdrop-blur-lg
           rounded-lg
           bg-opacity-10
             p-4 
              md:relative  md:z-auto
              md:bg-transparent  
              text-start
              md:bg-none
               md:justify-between 
              md:w-10/12 w-11/12 
 bg-cover md:bg-contain min-h-screen md:h-1/6  md:min-h-0 aniamte animate__fadeInUp
  ${isOpen ? "flex" : "hidden"}`}
      >
        <label htmlFor="op" className="md:hidden"></label>
        <nav
          className={`flex justify-start  items-start flex-col md:flex-row md:justify-around md:items-center  p-8 md:p-0 w-9/12  text-sm transition-all`}
        >
          {NavList.map((item, id: number) => (
            <Link
              className="hover:text-blue-600 my-5 md:my-0 font-bold text-md md:font-semibold md:text-sm"
              to={item.link}
              key={id}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-around w-full md:w-3/12  ">
          <button
            type="submit"
            className="py-2 my-4 rounded-3xl text-white bg-blue-600 w-3/5 cursor-pointer"
          >
            <Link
              to="/sign"
              className="bg-blue-600 rounded-3xl px-4 py-3 md:px-3 text-white"
            >
              hi
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
