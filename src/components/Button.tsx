
import React from 'react'
type ButtonProps = {
    children: React.ReactNode; 
  };
  function Button(props:ButtonProps) {

  return (
  
    <button   className="py-2 my-4 rounded-3xl text-white bg-blue-600 w-2/5 cursor-pointer hover:bg-blue-700" >
{props.children}
    </button>
  )
}

export default Button