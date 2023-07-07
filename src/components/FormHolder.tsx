import { useState } from "react";
import { Form } from "./Form";
import './style.css'

import { LinkResult } from "./LinkResult";
type Props = {};
export const FormHolder = (props: Props) => {
    const [inputValue, setInputValue] = useState('')
  return (

<div className="flex justify-around items-center py-8 w-full relative  text-sm pt-10 md:pt-[8rem]   gradient-animation " >
      
      <div className="flex md:max-w-lg w-5/6 flex-col p-8  bg-white relative ">
        <Form />
       <LinkResult inputValue={inputValue} />
        <div>
      
          <div className="flex justify-around ">
            <p className="text-blue-500 ">
              By clicking TrimURL, I agree to the{" "}
              <a href="#" className="text-blue-600 font-semibold">
                Terms and Conditions
              </a>,
              {" "}
              <a className="text-blue-600 font-semibold" href="#">
                Privacy Policy
              </a>{" "}
              and Use of Cookies.
            </p>
          </div>
        </div>
      </div>
      
    </div>

  );
};
