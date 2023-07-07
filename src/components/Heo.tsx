import span from "../assets/span.svg";
import HeroImg from "../assets/Hero-img.svg";
import BgProp from "../assets/bgitem.svg";
import rect from "../assets/rect.svg";
import { Link } from "react-router-dom";
import Button from "./Button";
const Hero = () => {
  return (
    <div>
      <div className="hero pt-20 flex flex-col text-center items-center  md:pt-20">
        <h1 className="font-semibold  md:text-5xl text-2xl w-8/12 md:w-full text-center md:max-w-5xl md:flex flex-col md:py-10  pb-5 md:leading-7 md:mt-10  mx-4 m:mx-0">
          <span className="text-center">
            Optimize Your Online Experience with Our{" "}
          </span>
          <br className="md:block hidden" />
          <span className="flex w-full text-center justify-center md:my-4 ">
            Advanced{" "}
            <span className="text-blue-600 flex flex-col md:mx-3">
              URL Shortening <img className=" hidden md:flex md:w-70" src={span} alt="hypen" />
            </span>{" "}
            Solution
          </span>
        </h1>
        <p className="max-w-2xl leading-8 py-3 pt-0">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div className="my-8  w-full flex   justify-center">
         <div className="w-full md:w-4/12">
         <Button >
         <Link to='/sign' >
            Sign Up{" "}
          </Link>
         </Button>
          <button className="text-blue-600 mx-5"> Learn more</button>
         </div>
        </div>
        <div className="flex">
          <div className="absolute left-80">
            <img src={BgProp} alt="bg item" className=" w-5/6 z-10 md:z-0" />
          </div>
          <div className=" bg-white flex flex-col justify-center items-center border-2 border-solid rounded-xl p-6 border-blue-400 relative z-20 md:z-10 ">
            <img src={HeroImg} alt="firstImg" className="w-10/12" />
            <p className=" max-w-sm ">
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
        </div>
        <div className=" my-10 md:my-28">
          <img src={rect} alt="thin rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
