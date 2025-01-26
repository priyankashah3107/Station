"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  onClose: () => void;
};
const Form: React.FC<Props> = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <form onSubmit={onFormSubmit} className="">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg relative">
            <div className="relative">
              <div>
                <div className="absolute top-[10px] right-[10px]">
                  <button
                    className="bg-black/30 rounded-full p-1"
                    onClick={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Image
                  src={"/podcast/p4.png"}
                  alt="img"
                  width={100}
                  height={100}
                  className="h-32 w-full object-cover lg:h-48 sm:rounded-t-2xl"
                />
              </div>
              <div className="-mt-10 sm:-mt-12 sm:flex sm:items-end px-4">
                <Image
                  src={"/podcast/p4.png"}
                  alt=""
                  loading="lazy"
                  width={96}
                  height={96}
                  decoding="async"
                  data-nimg="1"
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-white sm:h-24 sm:w-24"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-bold">
                Sign up and join the Club 92 Station
              </h1>
              <p className="text-sm">
                Get behind the scenes with exclusive drops, rewards and content
                only accessible to true 92%ers.
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
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-black text-white hover:bg-[#171717] focus:bg-primary-hover border border-[#000] h-10 px-7 py-2 w-full"
                  type="submit"
                >
                  Enter Community
                </button>
              </div>
            </div>
            {/* lines */}
            <div className="relative flex justify-center items-center gap-4 text-sm my-2 text-[#707481]">
              <div className="h-[1px] w-full rounded-lg bg-[#DEE0E4] undefined"></div>
              or
              <div className="h-[1px] w-full rounded-lg bg-[#DEE0E4] undefined"></div>
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
                <span className="font-semibold">Term of Services</span> and have
                read the <span className="font-semibold">Privacy Policy.</span>{" "}
                I also agree that Station may{" "}
                <span className="font-semibold">share my information</span> with
                Club 92.
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
