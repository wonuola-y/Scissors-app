import logo from "../assets/logo.svg";

// import { Link } from "react-router-dom";

const NavList = [
  {
    name: "My URLs",
    link: "/",
  },
  {
    name: "Features",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Analytics",
    link: "/",
  },
  {
    name: "FAQs",
    link: "/",
  },
];
const Nav = () => {
  return (
    <div className="flex justify-around w-full border-2 border-solid border-red-600 ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav className="flex justify-around items-center w-7/12">
        {NavList.map((item, id:number) => (
          <a className="hover:text-blue-600" href={item.link} key={id}>{item.name}</a>
        ))}
      </nav>
      <div className="flex justify-around w-3/12 ">
        <button className="text-blue-600">Log In</button>
        <button className="bg-blue-600 rounded-3xl px-3 text-white">Try for Free</button>
      </div>
      
    </div>
  );
};

export default Nav;
