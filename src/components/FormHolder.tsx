import { useState } from "react";
import { Form } from "./Form";
import { LinkResult } from "./LinkResult";
type Props = {};
export const FormHolder = (props: Props) => {
    const [inputValue, setInputValue] = useState('')
  return (
    <div className="border-2 border-red-600 border-solid flex justify-center items-center ">
      <div className="flex flex-col p-5 my-10 border-green-400 border-solid border-2 max-w-md">
        <Form setInputValue={setInputValue}/>
       <LinkResult inputValue={inputValue} />
        <div>
      
          <div className="flex justify-around">
            <p className="text-blue-500 ">
              By clicking TrimURL, I agree to the{" "}
              <a href="#" className="text-blue-600 font-semibold">
                Terms and Conditions{" "}
              </a>
              ,{" "}
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
