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
    answer: " URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    id: 3,
    question: "Are the shortened links permanent? Will they expire??",
    answer: " URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    id: 4,
    question: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
    answer: " URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    id: 5,
    question: "What is a QR code and what can it do?",
    answer: " URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    id: 6,
    question: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
    answer: " URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  }
  
]

const Faq = () => {
  // exodus 12: 3 ecc 3:14 rev 3:8
const [active, setActive] = useState<number | null>(null)
const toggle = (index: number) => {
  setActive(active === index ? null : index)
  
}
  return (
    <div>Faq

<div className="flex flex-col justify-center items-center">
{FAQ.map((i, id)=>(
  <div key={id} className="flex flex-col w-2/3 ">
  <div className="flex justify-between py-5 "  onClick={()=> toggle( id )} >
  <h1 className=" cursor-pointer ">
    {i.question}
        </h1>
        <b className={` cursor-pointer ${active === id ? active : ''}`}>+</b>
  </div>
        {active === id && <p className="border-2 text-sm py-5 border-solid border-red-600 ">{i.answer}</p> }
  </div>
))}

</div>


    </div>
  )
}

export default Faq