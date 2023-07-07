import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";

export const Form = () => {
  const [loader, setLoader] = useState(false);
  const [copy, setCopy] = useState(false);
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState("");
  const fetchData = async () => {
    try {
      setLoader(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);
      
      setResult(res.data.result.full_short_link);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  function handleClick() {
    fetchData();
    setInput("");
  }
  function handleChange(e: any) {
    setInput(e.target.value);
    setErrorMessage("");
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (input.trim() === " ") {
      setErrorMessage("Please enter a value.");
      setLoader(false)
      return;
    }
    else{
      setLoader(true);
   
      setTimeout (()=>{
        setInput("");
        setErrorMessage("");
        setLoader(false);

      }, 5000)
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="  flex flex-col">
        <input
          type="url"
          name="url"
          id="url"
          className="border-[1.5px] border-blue-600 border-solid rounded-xl p-4 my-4"
          
          placeholder="Paste Url here..."
          value={input}
          onChange={handleChange}
        />
        {errorMessage && !loader && <p>{errorMessage}</p>}

        {/* <Link to="/login"> */}
        <button
          className="bg-blue-600 rounded-3xl w-full px-3 py-3 my-3 text-white"
          onClick={handleClick}
          type="submit"
        >
          Try for Free
        </button>
        {/* </Link> */}
      </form>
      <div>
        {loader === true ? (
         <div className="flex justify-center">
          <p className="custom-loader my-5"></p>
      </div>
        ) : (
          <div className="flex items-center justify-between my-3">
            <input
              type="text"
              className="border-[1.5px] rounded-xl border-blue-600 border-solid w-3/6 mr-3 px-2 py-3"
              readOnly
              value={result}
              placeholder="Short link"
            />

            <CopyToClipboard text={result} onCopy={() => setCopy(true)}>
              <button
                className={`${
                  copy ? "copied" : ""
                } bg-blue-600 rounded-3xl px-3 py-3 w-2/5 text-white hover:bg-blue-400`}
              >
                Copy
              </button>
            </CopyToClipboard>
          </div>
        )}
      </div>
    </div>
  );
};
