import { useState } from "react"

interface fq {
  id: number
  question: string,
  answer: string,
}
const FAQ: fq[] = [
  {
    id: 1,
    question: "How does URL shortening work?",
    answer: " URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    id: 2,
    question: "Is it necessary to create an account to use the URL shortening service?",
    answer: " Yes it is.",
  },
  {
    id: 3,
    question: "Are the shortened links permanent ? Will they expire ?",
    answer: " No, they don't expire.",
  },
  {
    id: 4,
    question: "Benefits of a short URL?",
    answer: " According to Bit.ly, 'How many people can even remember a long web address, especially if it has tons of characters and symbols? A short URL can make your link more memorable. Not only does it allow people to easily recall and share your link with others, it can also dramatically improve traffic to your content.'",
  },
  {
    id: 5,
    question: "What is a QR code?",
    answer: " According to bit.ly, 'Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is always in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number.'",
  },
  {
    id: 6,
    question: "Is there an API available for integrating  URL shortening into my own applications or websites?",
    answer: " Not availble yet.",
  }
  
]

const Faq = () => {
  // exodus 12: 3 ecc 3:14 rev 3:8
const [active, setActive] = useState<number | null>(null)
const toggle = (index: number) => {
  setActive(active === index ? null : index)
  
}
  return (
    <div className="pt-20 md:pt-40">
      <h1 className="text-center text-3xl font-bold">FAQs</h1>

<div className="flex flex-col justify-center items-center ">
{FAQ.map((i, id)=>(
  <div key={id} className="flex flex-col w-2/3 ">
  <div className="flex justify-between py-5 "  onClick={()=> toggle( id )} >
  <h1 className=" cursor-pointer ">
    {i.question}
        </h1>
        <b className={` cursor-pointer ${active === id ? active : ''}`}>+</b>
  </div>
        <div className="my-4">
        {active === id && <p className="text-sm p-5 
        bg-blue-400 bg-clip-padding
           backdrop-filter
           backdrop-blur-lg
           rounded-lg
           bg-opacity-10 ">{i.answer}</p> }
        </div>
        <hr />
  </div>
))}

</div>


    </div>
  )
}

export default Faq