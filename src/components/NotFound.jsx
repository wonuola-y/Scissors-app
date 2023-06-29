import errorImg  from "../assets/sarah-kilian-52jRtc2S_VE-unsplash.jpg";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex border-2 border-blue-500 min-h-screen ">
        <div className="w-1/2 border-2 border-green-400 flex  justify-center items-center ">
<img src={errorImg} alt="hero-img" className=" border-2 rounded-lg border-blue-400"/>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col  ">
<h1 className="text-9xl font-bold">4<span className="text-blue-500 ">0</span>4</h1>
<p className="font-semibold text-3xl my-5">Page not found</p>
<Link to='/' className="bg-blue-500 p-3 rounded text-white my-3">
Go back to home 
</Link>
        </div>
    </div>
  )
}