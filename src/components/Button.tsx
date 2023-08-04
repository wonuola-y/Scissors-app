
import React from 'react'
type ButtonProps = {
    children: React.ReactNode; 
  };
  function Button(props:ButtonProps) {

  return (
  
    <button className="py-2 my-4 rounded-3xl text-white bg-blue-600 w-2/5 cursor-pointer hover:bg-white hover:text-blue-600 hover:outline hover:outline-2 hover:outline-blue-600 hover:transition-all hover:ease-in-out" >
{props.children}
    </button>
  )
}

export default Button