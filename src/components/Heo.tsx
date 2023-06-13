import span from "../assets/span.svg";
import HeroImg from "../assets/Hero-img.svg";
import BgProp from "../assets/bgitem.svg";
import rect from "../assets/rect.svg";
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col text-center items-center">
        <h1 className="border-2 border-solid  font-semibold border-red-500 text-5xl max-w-5xl flex flex-col py-10 ">
          <span className="text-center">
            Optimize Your Online Experience with Our{" "}
          </span>
          <br />
          <span className="flex w-full  border-2 border-solid border-red-600 text-center justify-center ">
            Advanced{" "}
            <span className="text-blue-600 flex flex-col mx-3">
              URL Shortening <img className=" w-70" src={span} alt="hypen" />
            </span>{" "}
            Solution
          </span>
        </h1>
        <p className="max-w-2xl leading-8 py-5">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div className="py-5">
          <button className=" bg-blue-600 rounded-3xl p-2 px-4 text-white mx-5">
            Sign Up{" "}
          </button>
          <button className="text-blue-600"> Learn more</button>
        </div>
        <div className="flex">
          <div className="absolute left-80">
            <img src={BgProp} alt="bg item" className=" w-5/6" />
          </div>
          <div className=" bg-white flex flex-col justify-center items-center border-2 border-solid rounded-xl p-6 border-blue-400 relative z-10 ">
            <img src={HeroImg} alt="firstImg" className="w-10/12" />
            <p className=" max-w-sm ">
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
        </div>
        <div className=" my-28">
          <img src={rect} alt="thin rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
