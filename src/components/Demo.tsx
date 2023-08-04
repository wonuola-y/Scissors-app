import 'animate.css';

import { Link } from "react-router-dom";

export const Demo = () => {
  return (
    <div className="flex min-h-screen font-mw md:flex-row flex-col justify-center items-center ">
       
        <div className="w-1/2 flex justify-center items-center flex-col">
<h1 className="text-3xl font-bold animate__animated animate__swing animate__faster animate__repeat-2">This is a Demo Website.</h1>
<p className="font-semibold text-xl my-5">So this page doesn't really exist!</p>
<Link to='/' className="bg-blue-600 p-3 rounded-3xl hover:bg-white hover:text-blue-600 hover:outline hover:outline-2 hover:outline-blue-600 hover:transition-all hover:relative hover:ease-in-out  text-white my-3">
Go back to home 
</Link>
        </div>
    </div>
  )
}