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

const CreateShow = () => {
  return (
    <>
      <Navbar />
      <ClaimYourStation />
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
              className=" absolute -bottom-6 lg:-bottom-16 object-cover scale-[1.1]  md:w-[775px] md:h-[775px] "
            />
          </div>
        </div>
      </section>
    </>
  );
}
