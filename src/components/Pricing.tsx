import Check from "../assets/check.svg";

const Prices = [
  {
    id: 1,
    title: "Basic",
    price: "Free",
    p: "Free plan for all",
    img: Check,
    perkOne: "Unpmited URL Shortening",
    perkTwo: "Basic pnk Analytics",
    perkThree: "Customizable Short pnks",
    perkFive: "Standard Support",
    perkSix: "Ad-supported'",
  },
  {
    id: 2,
    title: " Professional ",
    price: "$15/month",
    p: "Ideal for business creators",
    img: Check,
    perkOne: "Enhanced pnk Analytics",
    perkTwo: "Custom Branded Domains",
    perkThree: "Advanced pnk Customization",
    perkFive: "Priority Support",
    perkSix: "Ad-free Experience",
  },
  {
    id: 3,
    title: "Teams",
    price: "$25/month",
    p: "Share with up to 10 users",
    img: Check,
    perkOne: "Team Collaboration",
    perkTwo: "User Roles and Permissions",
    perkThree: "Enhanced Security",
    perkFive: "API Access",
    perkSix: "Dedicated Account Manager",
  },
];
const Pricing = () => {
  return (
    <div>
      <div className="py-10 flex flex-col w-full border-2 border-sopd border-amber-300 items-center justify-around ">
        <div className="flex flex-col justify-center items-center w-9/12">
          <h2 className="text-4xl font-semibold my-2">A <span className="text-blue-600">price perfect</span> for your needs.</h2>
          <p className="text-center">
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
        <div className="flex w-full border-2 border-sopd border-amber-300 my-20 justify-center ">
          {Prices.map((price) => (
            <div
              className=" border-2 border-sopd border-blue-300 
       py-8 px-4
       rounded-lg
       flex flex-col justify-start
       hover:scale-125 hover:bg-slate-800 hover:text-white hover:text-sm
       text-sm
       "
              key={price.id}
            >
              <h3 className="py-3">{price.title}</h3>
              <p className="text-xl font-bold">{price.price}</p>
              <p>{price.p}</p>
             
                <div className="flex my-2" >
                <img className="mx-3  hover:text-white" src={price.img} alt="check-icon" /> 
                <p className="flex">
               {price.perkOne} </p>  
              
                </div>
               <div className="flex my-2">
               <img className="mx-3 hover:text-white" src={price.img} alt="check-icon" /> 
               <p className="flex ">
                   {price.perkTwo}</p> 
               </div>
                 <div className="flex my-2">
                 <img className="mx-3 hover:text-white" src={price.img} alt="check-icon" /> 
                 <p className="flex  ">
                  {price.perkThree}</p> 
                 </div>
                <div className=" flex my-2">
                <img className="mx-3 hover:text-white" src={price.img} alt="check-icon" /> 
                <p className="flex">
                  {price.perkFive}</p>  
                </div>
                <div className="flex my-2">
                <img className="mx-3 hover:text-white" src={price.img} alt="check-icon" /> 
                <p className="flex">
                  {price.perkSix}</p>  
                </div>
           
            </div>
          ))}
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
