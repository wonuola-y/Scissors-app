import axios from "axios";

import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const LinkResult = ({ inputValue }: any) => {

  const [shortner, setShortner] = useState("");
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortner(response.data.result.full_short_link);
    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
      return
    }
   
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copy]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">Something went wrong :(</p>;
  }


  return (
    <>
      {shortner && (
        <div className="flex items-center justify-between my-3 ">
        <p className="border-[1.5px] rounded border-blue-600 border-solid w-3/6 mr-3 px-2 py-3">
          {shortner}
        </p>
        <CopyToClipboard text={shortner} onCopy={() => setCopy(true)}>
          <button
            className={`${
              copy ? "copied" : ""
            } bg-blue-600 rounded-3xl px-3 py-3 w-2/5 text-white`}
          >
            Copy
          </button>
        </CopyToClipboard>
      </div>
      )}
        
      
    </>
  );
};
