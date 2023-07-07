import React from "react";
import url from "../assets/url.svg";
import custom from "../assets/custom.svg";
import qr from "../assets/qr.svg";
import data from "../assets/data.svg";
import { Link } from "react-router-dom";
const List = [
  {
    id: 1,
    title: "3M",
    sub: "Active users",
  },
  {
    title: "60M",
    sub: "Links and QR codes created",
  },
  {
    title: "1B",
    sub: "Clicked and scanned connections",
  },
  {
    title: "300K",
    sub: "App integrations",
  },
];
const Choose = [
  {
    id: 1,
    img: url,
    title: "URL Shortening",
    sub: "Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.",
  },
  {
    id: 2,
    img: custom,
    title: "Custom URLs",
    sub: "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.",
  },
  {
    id: 3,
    img: qr,
    title: "QR Codes",
    sub: "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.",
  },
  {
    id: 4,
    img: data,
    title: "Data Analytics",
    sub: "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.",
  },
];
const Info = () => {
  return (
    <div className="pt-20 md:pt-[8rem] flex flex-col items-center ">
    <div className="max-w-7xl ">
    <div
        className=" flex 
      flex-col w-full items-center justify-around text-center "
      >
        <div>
          <h1 className=" text-5xl md:text-6xl leading-relaxed font-bold py-10">
            One Stop.
            <br />
            Four <span className="text-blue-600 my-4">Possibilities</span>
          </h1>
        </div>

        <div className="flex  flex-col md:flex-row justify-around w-full">
          {List.map((item) => (
            <ul key={item.id} className="flex flex-col  ">
              <li className="my-4">
                <b className="text-3xl">{item.title}</b>
                <br />
                <small className="text-base max-w-[60px] ">{item.sub}</small>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div
        className="flex 
      text-center 
      flex-col md:flex-row
      my-16 
      justify-around items-center 
      flex-1  "
      >
        <div
          className="w-full
         md:w-5/12 md:text-left
         md:flex md:flex-col
          "
        >
          <h2 className="font-bold text-4xl">
            Why choose <span className="text-blue-600">Scissors</span>
          </h2>
          <p className=" leading-7 md:max-w-md text-sm">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center  md:w-6/12 md:justify-between">
          {Choose.map((item) => (
            <div
              className=" flex
               flex-col 
              
               text-sm
               justify-center items-center 
               md:w-2/5
                m-5 md:m-auto"
              key={item.id}
            >
              <img
                src={item.img}
                alt="icon"
                className="w-1/6 "
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className=" leading-7">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-center ">
        <Link
          to="/"
          className="py-3 px-3 text-white bg-blue-600 rounded-3xl m-4 mb-0"
        >
          Back to top
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Info;
// to do
// 404 page (Done)
// error boundary
// loader (Done)
// add the add to cart thingy feature ( the feature that updates the pricing thingy)
// add background to the try it out feature.
// Footer creation
// sign up page
// update the faq
// revolutionizing link optimization

// ongoing
//firebase
// get the api for the link fast
// try using react query to update it

// optional to do (do this after submission)
// background animations
// login animation
