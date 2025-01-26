"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const logos = [
  {
    id: 1,
    image: "/logos/logo1.svg",
  },
  {
    id: 2,
    image: "/logos/logo2.png",
  },
  {
    id: 3,
    image: "/logos/logo3.png",
  },
];

const images = [
  {
    id: 1,
    image: "/logos/l1.svg",
  },
  {
    id: 2,
    image: "/logos/l2.svg",
  },
  {
    id: 3,
    image: "/logos/l3.svg",
  },
  {
    id: 4,
    image: "/logos/l4.svg",
  },
  {
    id: 5,
    image: "/logos/l5.svg",
  },
  {
    id: 6,
    image: "/logos/l6.png",
  },
  {
    id: 7,
    image: "/logos/l7.svg",
  },
  {
    id: 8,
    image: "/logos/l8.svg",
  },
];

const pricingData = [
  {
    title: "Starter",
    price: "Free",
    emailLimit: "Up to 200 email signups",
    features: ["Giveaways & Contests", "Showcase Deals", "Auto-email episodes"],
  },
  {
    title: "Indie",
    price: "$19 / month",
    emailLimit: "Up to 500 email signups",
    features: ["All Starter features +", "Email CSV exports"],
  },
  {
    title: "Influencer",
    price: "$49 / month",
    emailLimit: "Up to 1,000 email signups",
    features: [
      "All Indie features +",
      "Multiple channels",
      "Email Integrations",
    ],
  },
  {
    title: "Thought Leader",
    price: "$199 / month",
    emailLimit: "Up to 5,000 email signups",
    features: [
      "All Influencer features +",
      "Custom URL",
      "Station's contest terms and conditions",
    ],
  },
  {
    title: "Large Show",
    price: "Contact Us",
    emailLimit: "Over 10,000 email signups",
    features: [
      "All Thought Leader features +",
      "Audience Reports",
      "Community Manager",
      "Contest Management",
    ],
  },
];
const CreateShow = () => {
  return (
    <>
      <Navbar />
      <ClaimYourStation />
      <ShowCase />
      <Price />
    </>
  );
};

export default CreateShow;

function ClaimYourStation() {
  const [email, setEmail] = useState("");
  return (
    <>
      <section className="flex justify-center ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full overflow-hidden min-h-screen bg-secondary-lite =">
          <div className="flex flex-col gap-6 md:gap-12 justify-center items-center px-4 md:px-24 pt-12 md:py-20">
            <form className="flex flex-col gap-6 md:gap-12 max-w-md">
              <div className="flex flex-col gap-2 md:gap-4">
                <h2 className="text-[28px] md:text-[40px] md:leading-[44px] font-bold text-black tracking-tighter">
                  Claim your Station
                </h2>
                <p className="md:text-[20px] text-text-primary">
                  The all-in-one platform to understand, grow and monetize your
                  audience.
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <label className="mt-4 text-sm font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email address
                </label>
                <input
                  className="flex w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 py-2.5 px-2"
                  id="email"
                  placeholder="example@example.com"
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white opacity-100 hover:opacity-90 h-10 px-7 py-2 w-full"
                    type="submit"
                  >
                    Start your Station, it's free
                  </button>
                </div>
              </div>
              {/* lines */}
              <div className="relative flex justify-center items-center gap-4 text-sm my-2 text-[#707481]">
                <div className="h-[1px] w-full rounded-lg bg-[#DEE0E4] "></div>
                or
                <div className="h-[1px] w-full rounded-lg bg-[#DEE0E4]"></div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-black text-white hover:bg-black focus:bg-primary-hover border border-primary h-10 px-7 py-2 w-full">
                  <svg
                    className="h-5 w-5 mr-2"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    ></path>
                  </svg>
                  <span>Sign in with Google</span>
                </button>
                <p className="text-xs">
                  By clicking &#39;Enter Community&#39; or &#39;Continuing with
                  Google&#39; I agree to the Drop Station Inc.{" "}
                  <span className="font-semibold">Term of Services</span> and
                  have read the{" "}
                  <span className="font-semibold">Privacy Policy.</span> I also
                  agree that Station may{" "}
                  <span className="font-semibold">share my information</span>{" "}
                  with Club 92.
                </p>
              </div>
            </form>
            <div className="flex flex-col gap-4 border-t border-tertiary pt-8 w-full">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full mx-auto">
                <p className="font-bold text-black text-sm">As Featured On</p>
                <div className="flex items-center gap-2 md:gap-4">
                  {logos.map((val, index) => (
                    <Image
                      key={index}
                      src={val.image}
                      alt="img"
                      width={50}
                      height={50}
                      className="w-[80px] h-[20px] sm:w-[100px] sm:h-[20px] mt-2 sm:mt-0 "
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="  relative flex items-center justify-center aspect-square md:aspect-auto">
            <Image
              src={"/create/create.png"}
              alt="img"
              width={500}
              height={600}
              className=" absolute -bottom-6 lg:-bottom-16 object-cover scale-[1.1]  lg:w-[775px] lg:h-[775px] "
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ShowCase() {
  return (
    <>
      <section className="flex flex-col gap-24 lg:gap-48 px-4 py-16 lg:px-24 lg:py-24 lg:pt-40 bg-black h-full  relative w-full overflow-hidden mt-10">
        <div className="flex flex-col ">
          <div className="absolute top-1/2 -translate-y-1/2 -right-44 bg-gradient-to-r from-[#FE0307] to-[#D90AB9] size-[374px] rounded-full opacity-30 z-0"></div>
          <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-24 justify-around  text-center w-full z-[1] ">
            <div className="lg:w-[700px] lg:h-[500px] object-cover">
              <Image
                src={"/showcase.png"}
                alt="showcase"
                width={500}
                height={500}
                className="lg:w-[625px] lg:h-[500px] "
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-6 items-center justify-center text-center">
              <h1 className="text-[28px] md:text-[40px] leading-[120%] lg:leading-[40px] font-bold text-white tracking-tight lg:max-w-sm">
                Showcase your content better than any website builder.
              </h1>
              <p className="text-white max-w-sm font-medium text-[20px] leading-[20px]">
                Grow fans, build community and monetize your audience.
              </p>
            </div>
          </div>

          {/* <div>2</div> */}

          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center justify-around mt-32 md:mt-72 ">
            <div className="flex flex-col gap-3 lg:gap-6 items-center justify-center text-center">
              <h1 className="text-[28px] md:text-[40px] leading-[120%] lg:leading-[40px] font-bold text-white tracking-tight lg:max-w-sm">
                Ignite fandom and discussions.
              </h1>
              <p className="text-white max-w-sm font-medium text-[20px] leading-[20px]">
                Consolidate your offers, discussions, subscriptions and more.
              </p>
            </div>
            <div className="lg:w-[700px] lg:h-[500px] object-cover">
              <Image
                src={"/show.png"}
                alt="show"
                width={500}
                height={500}
                className="lg:w-[625px] lg:h-[500px] "
              />
            </div>
          </div>
          {/* <div>3</div> */}
          <div className="flex flex-col  gap-12 lg:gap-24 items-center mt-20  lg:mt-52 ">
            {/* <div className="absolute bottom-0 -left-44 bg-gradient-to-r from-[#FE0307] to-[#D90AB9]  rounded-full opacity-30 z-0"></div> */}
            <div className="absolute top-1/2 -left-44 bg-gradient-to-r from-[#FE0307] to-[#D90AB9] size-[374px] rounded-full opacity-30 z-0"></div>

            <div className="flex flex-col gap-3 lg:gap-6 items-center justify-center text-center z-[1]">
              <h1 className="text-[28px] md:text-[40px] leading-[120%] lg:leading-[40px] font-bold text-white tracking-tight">
                Set your page up with a <br />
                <span className="bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-transparent bg-clip-text">
                  click of a button.
                </span>
              </h1>

              <p className="text-white max-w-sm font-medium text-[20px] leading-[20px]">
                Station uses AI to search your offers, merch and showcase your
                content.
              </p>
            </div>
            <div className="w-full h-full aspect-video rounded-2xl max-w-4xl border border-tertiary/20 overflow-hidden cursor-pointer">
              <iframe
                src="https://www.youtube.com/embed/EITXQymwILE?si=G87fE3_vlNvsJbT9&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fstation.page"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full rounded-2xl pointer-events-none"
                data-gtm-yt-inspected-173360107_102="true"
                id="382327537"
                title="Welcome to Station"
              ></iframe>
            </div>
          </div>
          {/* <div>4</div> */}
          <div className="flex justify-center mt-20">
            <div className="flex flex-col gap-9 items-center justify-center text-center py-8 bg-[#F3F4F6] rounded-2xl z-[1] max-w-2xl w-full px-4">
              <div className="flex flex-col gap-2 items-center justify-center text-center">
                <h2 className="text-[24px] md:text-[32px] font-bold text-text-primary tracking-tight md:leading-[36px] leading-[120%]">
                  Station works with your favorite tools
                </h2>
                <p className="md:text-lg text-text-primary">
                  Send all your sign ups to your current marketing platforms.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-x-2 gap-y-4 max-w-xl">
                {images.map((val, index) => (
                  <span
                    key={index}
                    className="flex items-center justify-center bg-white px-4 py-2 rounded"
                  >
                    <Image
                      src={val.image}
                      alt="img"
                      width={150}
                      height={28}
                      className="w-[150px] h-[28px]"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Price() {
  return (
    <>
      <section className="flex flex-col px-4 lg:p-24 py-16 gap-9 w-full bg-secondary-lite max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-[28px] md:text-[40px] md:leading-[36px] font-semibold text-black tracking-tighter">
              Priced for all show sizes
            </h1>
            <p className="text-lg text-black">
              Get started and grow with Station for free.
            </p>
          </div>
          <div className="flex gap-3 w-full overflow-x-auto xl:overflow-x-visible no-scrollbar hover:scrollbar-thin items-start">
            <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide pb-4 pt-2">
              {pricingData.map((plan, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-6 shadow-md flex flex-col justify-between  border-tertiary px-6 py-9 gap-6 shrink-0 overflow-hidden bg-white hover:bg-black hover:text-white w-60 h-[400px] ${
                    plan.title === "Indie" ? "bg-white" : "bg-white"
                  }`}
                >
                  <h2 className="text-xl font-bold">{plan.title}</h2>
                  <p className="text-2xl font-semibold mt-2">{plan.price}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {plan.emailLimit}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 mr-2">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
