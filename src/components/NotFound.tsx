import 'animate.css';

import errorImg  from "../assets/sarah-kilian-52jRtc2S_VE-unsplash.jpg";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen font-mw md:flex-row flex-col justify-center items-center overflow-y-scroll text-center">
        <div className="w-1/2 flex mx-4 justify-center items-center py-5 ">
<img src={errorImg} alt="hero-img" className="hidden md:flex shadow shadow-blue-500/40 rounded-lg "/>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col">
<h1 className="text-9xl font-bold animate__animated animate__swing animate__faster animate__repeat-2">4<span className="text-blue-500 ">0</span>4</h1>
<p className="font-semibold text-2xl my-5">We can't find the page you are looking for!</p>
<Link to='/' className="bg-blue-500 p-3 rounded text-white my-3">
Go back to home 
</Link>
        </div>
    </div>
  )
}