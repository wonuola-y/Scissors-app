import { useState } from "react";
import { Link } from "react-router-dom";

export const Form = ({setInputValue}:any) => {
  const [Value, setValue] = useState('')
  function handleClick() {
  setInputValue(Value) 
  setValue('')
}
  return (
    <div>
      <div className="  flex flex-col ">
        <input
          type="url"
          name="url"
          id="url"
          className="border-[1.5px] border-blue-600 border-solid rounded p-4 my-4"
          required
          placeholder="Paste Url here..."
          value={Value}
          onChange={(e)=>setValue(e.target.value)}
        />

        <div className="flex justify-between my-4 w-full">
          <select
            name="Domain"
            id="domain"
            className="w-6/12 py-2 border-[1.5px] border-blue-600 border-solid rounded"
          >
            Choose domain
            <option value="#">Choose domain</option>
            <option value="#">hi</option>
            <option value="#">hi</option>{" "}
          </select>

          <input
            type="text"
            placeholder="type alias here"
            className="border-[1.5px] border-blue-600 border-solid rounded w-5/12 px-4"
          />
        </div>
        <Link to='/login' >
        <button className="bg-blue-600 rounded-3xl w-full px-3 py-3 my-3 text-white" onClick={handleClick}>
            Try for Free
          </button>
        </Link>
      </div>
    </div>
  );
};
