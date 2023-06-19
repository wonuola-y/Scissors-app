

export const Form = () => {
  return (
    <div className="flex border-2 border-red-600 border-solid justify-center items-center">
        <div className="border-2 border-red-400 border-solid flex flex-col p-5 my-10 max-w-md">
            <input type="url" name="url" id="url" className="border-2 border-blue-600 border-solid rounded p-4 my-4" required placeholder="Paste Url here..."/>
           <div className="flex justify-between my-4 w-full">
           <select name="Domain" id="domain" className="w-5/12 py-2 border-2 border-blue-600 border-solid rounded">Choose domain 
            <option value="#">hi</option>
            <option value="#">hi</option>
            <option value="#">hi</option>   </select>
        
            <input type="text"  placeholder="type alias here" className="border-2 border-blue-600 border-solid rounded w-5/12 px-4" />
           </div>
           <button className="bg-blue-600 rounded-3xl px-3 py-3 my-3 text-white">Try for Free</button>
            <div className="flex justify-around">
              
            <p className="text-blue-500 ">By clicking TrimURL, I agree to the <a href="#" className="text-blue-600 font-semibold">Terms and Conditions </a>, <a className="text-blue-600 font-semibold" href="#">Privacy Policy</a> and Use of Cookies.</p>
            </div>
        </div>
    </div>
  )
}

