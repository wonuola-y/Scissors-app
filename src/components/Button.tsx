import React from 'react'

const Button = ({value}:any) => {
  return (
    <div >
        <button  type="submit"
            className="py-2 my-4 rounded-3xl text-white bg-blue-600 w-3/5 cursor-pointer" value={value} >

        </button>
    </div>
  )
}

export default Button