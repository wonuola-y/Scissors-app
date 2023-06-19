import React from "react";
import url from "../assets/url.svg";
import custom from "../assets/custom.svg";
import qr from "../assets/qr.svg";
import data from "../assets/data.svg";
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
    <div>
      <div className="py-10 flex w-full border-2 border-solid border-amber-300 items-center justify-around ">
        <div>
          <h1 className="text-4xl font-bold">
            One Stop.
            <br />
            Four <span className="text-blue-600">Possibilities</span>
          </h1>
        </div>

        {List.map((item) => (
          <ul
            key={item.id}
            className="flex flex-col  border-2 border-solid border-amber-300 "
          >
            <li>
              <b className="text-3xl">{item.title}</b>
              <br />
              <small className="text-base max-w-[60px] ">{item.sub}</small>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex my-16">
        <div className="w-5/12">
          <h2 className="font-bold text-4xl">
            Why choose <span className="text-blue-600">Scissors</span>
          </h2>
          <p className="max-w-lg leading-7">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.{" "}
          </p>
        </div>
        <div className="flex flex-wrap w-7/12">
          {Choose.map((item) => (
            <div className="max-w-xs m-5" key={item.id}>
              <img src={item.img} alt="icon" />
              <h3>{item.title}</h3>
              <p className="leading-6">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
