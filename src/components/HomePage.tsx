import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const homelogo = [
  {
    id: 1,
    name: "Join the Discussions",
    image: "/message-svgrepo-com.svg",
  },
  {
    id: 2,
    name: "Find Promo Codes",
    image: "/price-tag-svgrepo-com.svg",
  },
  {
    id: 3,
    name: "Join Podcast Events",
    image: "/reshot-icon-calendar-boxed-UAD9PSZXNL.svg",
  },
];

const images = [
  {
    id: 1,
    image: "/user/user-1.png",
  },
  {
    id: 2,
    image: "/user/user-2.png",
  },
  {
    id: 3,
    image: "/user/user-3.png",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col  justify-between lg:flex-row lg:gap-32 py-12 lg:pt-10 lg:pb-16 px-4 w-full h-full max-w-7xl items-center lg:ml-28">
        <div className="flex flex-col gap-6 md:gap-9 px-4 my-auto w-full   ">
          {/* 1 */}

          <div className="flex flex-col gap-6 items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-text-primary  text-[28px] md:text-[40px] leading-[120%] font-bold tracking-tighter text-center lg:text-left text-nowrap ">
              Join your Podcast Tribe
            </h1>
            <p className="text-sm text-text-primary max-w-lg text-center lg:text-left">
              Station is like a "Discord for Podcasts". A simple hub to discuss
              topics, attend events, find promo codes and explore hidden
              content.
            </p>
            <div className="relative w-full max-w-4xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="flex rounded-md border border-gray-300 py-2.5 pl-10 w-full placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm shadow focus:outline-none "
                placeholder="Search for a podcast community"
              />
            </div>
          </div>

          <div className="flex gap-5 items-center justify-center lg:justify-start lg:items-start">
            <div className="flex items-center lg:flex-col gap-2 lg:border-r border-[#f1f1f1] lg:pr-5">
              {/* <div className="flex flex-row">
                <Image
                  src="/user/user-1.png"
                  alt="user1"
                  width={40}
                  height={40}
                />
              </div> */}
              <div className="flex flex-row ">
                {images.map((val, index) => (
                  <div className="flex flex-row -ml-3" key={index}>
                    <Image
                      src={val.image}
                      alt="user1"
                      width={40}
                      height={40}
                      className="size-10"
                    />
                  </div>
                ))}
              </div>

              <p className="text-xs text-text-primary lg:text-center w-32">
                Join over <span className="font-bold">150K</span> podcast fans
                on Station
              </p>
            </div>
            {/* <div className="gap-11 hidden lg:flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 w-full">
                <Image
                  src="/message-svgrepo-com.svg"
                  alt="message"
                  width={35}
                  height={35}
                  className="size-7"
                />
                <p className="text-xs text-text-primary text-wrap text-center w-20">
                  Join the Discussions
                </p>
              </div>
            </div> */}

            {homelogo.map((val, index) => (
              <div
                className="gap-11 hidden lg:flex items-center justify-center"
                key={index}
              >
                <div className="flex flex-col items-center gap-2 w-full ">
                  <Image
                    src={val.image}
                    alt="message"
                    width={35}
                    height={35}
                    className="size-7"
                  />
                  <p className="text-xs text-text-primary text-wrap text-center w-20">
                    {val.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="items-center justify-center w-full relative hidden lg:flex h-full min-h-[396px] min-w-[539px]">
          <Image
            src="/explore-hero.png"
            alt="img"
            width={400}
            height={600}
            className="min-h-[396px] min-w-[539px]"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
