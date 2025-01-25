"use client";
import Image from "next/image";
import React, { JSX, useState } from "react";
import Button from "./Button";
import FootBall from "./FootBall";
import FilmClub from "./FilmClub";
import GuestSuggestion from "./GuestSuggestion";
import NoDumbQuestion from "./NoDumbQuestion";
import FanArt from "./FanArt";
import Feed from "./Feed";
import Explore from "./Explore";
import ExploreLeftPage from "./ExploreLeftPage";
import Deals from "./Deals";
import Merch from "./Merch";

const icons = [
  {
    id: 1,
    icon: "/utube.svg",
  },
  {
    id: 2,
    icon: "/twitter.svg",
  },
  {
    id: 3,
    icon: "/instagram.svg",
  },
  {
    id: 4,
    icon: "/tiktok.svg",
  },
];

const fanfeed = [
  {
    id: 1,
    name: "New 📡",
  },
  {
    id: 2,
    name: "Hot 🔥",
  },
  {
    id: 3,
    name: "Top 🏆",
  },
];

const videos = [
  {
    id: 1,
    vid: "/video/v2.jpg",
  },
  {
    id: 2,
    vid: "/video/v3.jpg",
  },
  {
    id: 3,
    vid: "/video/v4.jpg",
  },
  {
    id: 4,
    vid: "/video/v5.jpg",
  },
];

const RightFeed = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default RightFeed;

function Banner() {
  return (
    <>
      <section className="flex min-h-screen flex-col w-full max-w-[1048px] mx-auto">
        <div className="flex min-h-screen flex-col gap-y-6 p-3 md:p-6 lg:px-9 mx-auto w-full">
          <div className="flex flex-col">
            <Image
              src={"/hoading.png"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-[120px] sm:h-[200px] rounded-xl md:rounded-3xl"
            />

            <div className="flex flex-row justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className=" h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] -bottom-4 sm:bottom-0 -left-1.5 sm:left-2 grid place-items-center cursor-pointer bg-gradient-to-r from-[#FE0307] to-[#D90AB9] rounded-full overflow-hidden ring-[6px] ring-white bg-white group -mt-4 sm:-mt-8  sm:ml-6">
                  <Image
                    src={"/podcast/p4.png"}
                    alt="img"
                    width={100}
                    height={100}
                    className="size-[93px] sm:size-[111px] rounded-full"
                  />
                </div>

                <div className="flex flex-col sm:mt-4">
                  <h1 className="text-[#0E1323] text-lg font-bold">Club 92</h1>
                  <p className="text-sm text-[#0E1323] max-w-[26rem]">
                    Get behind the scenes with exclusive drops, rewards and
                    content only accessible to true 92%ers.
                  </p>
                  <div className="flex flex-row  gap-2 p-1 sm:hidden  ">
                    {icons.map((val) => (
                      <Image
                        src={val.icon}
                        key={val.id}
                        alt="icon"
                        width={40}
                        height={40}
                        className="flex flex-row size-7 hover:bg-[#dbdbdb] p-1 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                {/* <div>logo</div> */}

                <div className="hidden md:flex flex-row mt-4 gap-2 p-1  ">
                  {icons.map((val) => (
                    <Image
                      src={val.icon}
                      key={val.id}
                      alt="icon"
                      width={50}
                      height={50}
                      className="flex flex-row size-8 hover:bg-[#dbdbdb] p-1 rounded-lg"
                    />
                  ))}
                </div>

                <div className="mt-6 sm:mt-4">
                  <Button
                    buttonName="Join Wondery+"
                    color="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white opacity-100 hover:opacity-90 py-2 px-3 shadow"
                    size="px-4 py-2"
                    className="rounded"
                  >
                    Join Wondery+
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* feeds   */}
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <FanFeed />
            <LeftFeed />
          </div>
        </div>
      </section>
    </>
  );
}

function FanFeed() {
  return (
    <>
      <section className="flex flex-col gap-y-3 lg:w-[60%] pr-3 relative border-r border-secondary-lite h-full min-h-screen">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-3">
            <h2 className="flex items-center gap-3 text-text-primary text-lg font-semibold leading-5 w-full min-w-0 max-w-[35vw] lg:max-w-64 truncate">
              Fan Feed
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="size-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row text-xs  gap-3 flex-nowrap">
            {fanfeed.map((val) => (
              <button
                className="px-3 py-0.5 leading-6 h-fit  hover:bg-black text-black hover:text-white bg-gray-100 rounded-lg transition-colors duration-300"
                key={val.id}
              >
                {val.name}
              </button>
            ))}
          </div>
        </div>
        <div
          className="rounded-xl bg-white overflow-hidden flex flex-col"
          style={{
            border: "1px solid rgb(241, 241, 241)",
            boxShadow: "rgba(13, 10, 44, 0.06) 0px 4px 12px 0px",
          }}
        >
          <textarea
            rows={2}
            name="textContent"
            id="textContent"
            className="block w-full resize-none rounded-xl rounded-b-none p-4 pr-36 text-base font-normal text-primary placeholder:text-gray-400 focus:ring-0 sm:text-sm no-scrollbar border-none mb-2"
            placeholder="Post your thoughts"
            required
          ></textarea>
          <div className="flex gap-3 items-center absolute top-14 right-8">
            <button
              type="button"
              className="hover:opacity-80 transition-all duration-300 focus:outline-none focus-visible:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="size-5 text-[#707481]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path
                  d="M11.9937 9.90625C13.5359 9.90625 14.8156 8.71875 14.8156 7.21875C14.8156 5.71875 13.5687 4.53125 11.9937 4.53125C10.4187 4.53125 9.17188 5.78125 9.17188 7.25C9.17188 8.71875 10.4516 9.90625 11.9937 9.90625ZM11.9937 5.96875C12.7156 5.96875 13.3391 6.53125 13.3391 7.25C13.3391 7.96875 12.7484 8.53125 11.9937 8.53125C11.2391 8.53125 10.6484 7.96875 10.6484 7.25C10.6484 6.53125 11.2391 5.96875 11.9937 5.96875Z"
                  fill="#707481"
                ></path>
                <path
                  d="M16.2922 0.5625H2.70784C1.59221 0.5625 0.673462 1.4375 0.673462 2.5V17.5C0.673462 18.5625 1.59221 19.4688 2.74065 19.4688H16.2922C17.4078 19.4688 18.3594 18.5938 18.3594 17.5V2.5C18.3266 1.4375 17.4078 0.5625 16.2922 0.5625ZM2.70784 1.96875H16.2594C16.5875 1.96875 16.85 2.21875 16.85 2.53125V13.4375L14.4547 11.5625C13.7656 11.0312 12.7813 11.0625 12.1578 11.6562L9.46721 14.1875L6.0219 11.25C5.36565 10.6875 4.38127 10.6875 3.72502 11.25L2.15002 12.5938V2.5C2.15002 2.1875 2.41252 1.96875 2.70784 1.96875ZM16.2922 18.0625H2.70784C2.37971 18.0625 2.11721 17.8125 2.11721 17.5V14.4688L4.67659 12.25C4.77502 12.1562 4.90627 12.1562 5.00471 12.25L8.97502 15.625C9.10627 15.75 9.30315 15.8125 9.46721 15.8125C9.66409 15.8125 9.82815 15.75 9.99221 15.5938L13.175 12.5938C13.2735 12.5 13.4047 12.5 13.5031 12.5938L16.8172 15.2188V17.5C16.85 17.8125 16.5875 18.0625 16.2922 18.0625Z"
                  fill="#707481"
                ></path>
              </svg>
            </button>
            <button className="hover:opacity-80 transition-all duration-300 focus:outline-none focus-visible:outline-none focus:ring-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 text-[#707481]"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.0273 2.53505L2.68745 8.78505C2.43354 8.90615 2.44135 9.26943 2.69917 9.38271L6.57807 11.5741C6.80854 11.703 7.0937 11.6757 7.29292 11.5038L14.9414 4.91005C14.9921 4.86708 15.1132 4.78505 15.1601 4.83193C15.2109 4.88271 15.1328 4.9999 15.0898 5.05068L8.4726 12.5038C8.28901 12.7108 8.26167 13.0155 8.4101 13.2499L10.9453 17.3163C11.0703 17.5624 11.4257 17.5585 11.539 17.3085L17.4687 2.96865C17.5976 2.6874 17.3046 2.40224 17.0273 2.53505Z"
                  fill="#707481"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div>
          <RequestCollection />
        </div>
      </section>
    </>
  );
}

function RequestCollection() {
  const [selectedComponent, setSelectedComponent] =
    useState<JSX.Element | null>(null); // how can i fix this JSX by using JSX from react..?

  const handleComponents = (component: string) => {
    switch (component) {
      case "Feed":
        setSelectedComponent(<Feed />);
        break;
      case "FootBall":
        setSelectedComponent(<FootBall />);
        break;
      case "FilmClub":
        setSelectedComponent(<FilmClub />);
        break;
      case "GuestSuggestion":
        setSelectedComponent(<GuestSuggestion />);
        break;
      case "NoDumbQuestion":
        setSelectedComponent(<NoDumbQuestion />);
        break;
      case "FanArt":
        setSelectedComponent(<FanArt />);
        break;
      // default:
      //   setSelectedComponent(<QueryParameter />);
      default:
        setSelectedComponent(null);
    }
  };
  return (
    <>
      <div className="">
        <ul className="flex flex-wrap gap-1 mb-4">
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold"
            onClick={() => handleComponents("Feed")}
          >
            Fan Feed
          </li>
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold"
            onClick={() => handleComponents("FootBall")}
          >
            Football Talk 🏈
          </li>
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold"
            onClick={() => handleComponents("FilmClub")}
          >
            Film Club Suggestions
          </li>
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold"
            onClick={() => handleComponents("GuestSuggestion")}
          >
            Guest Suggestion
          </li>
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold"
            onClick={() => handleComponents("NoDumbQuestion")}
          >
            No Dumb Question
          </li>
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold"
            onClick={() => handleComponents("FanArt")}
          >
            Fan Art
          </li>
        </ul>
      </div>

      <div className="mt-10">
        {selectedComponent}
        {/* dynamically render of the selected comp */}
      </div>
    </>
  );
}

function LeftFeed() {
  return (
    <>
      <section>
        <div className="bg-black flex flex-col mt-3 min-w-full lg:min-w-[380px] overflow-hidden rounded-[20px] text-white sm:ml-6">
          <div className="flex flex-col gap-5 bg-[#000000] p-3 relative w-full transition-all duration-300">
            <div className="flex flex-row cursor-pointer">
              {/* Main Video Section */}
              <div className="relative">
                <Image
                  src={"/video/v1.png"}
                  alt="Main video thumbnail"
                  width={300}
                  height={290}
                  className="w-[300px] h-[290px] rounded-2xl"
                />
                {/* Play Button */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-4 bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white rounded-full z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                {/* Video Title */}
                <p className="text-center font-medium tracking-tight truncate leading-[30px] w-full mt-2">
                  Greatest Hit of 2024
                </p>
              </div>

              {/* Additional Videos Section */}
              <div className="flex flex-col gap-4 ml-4 mt-4">
                {videos.map((val) => (
                  <div key={val.id} className="relative">
                    <Image
                      src={val.vid}
                      alt={`Thumbnail for video ${val.id}`}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full"
                    />
                    {/* Play Button Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-4">
          <LeftFeedExplore />
        </div>
      </section>
    </>
  );
}

function LeftFeedExplore() {
  const [selectedComponent, setSelectedComponent] =
    useState<JSX.Element | null>(null);

  const handleComponents = (component: string) => {
    switch (component) {
      case "Explore":
        setSelectedComponent(<ExploreLeftPage />);
        break;
      case "Deals":
        setSelectedComponent(<Deals />);
        break;
      case "Merch":
        setSelectedComponent(<Merch />);
        break;
      default:
        setSelectedComponent(null);
    }
  };

  return (
    <>
      <section>
        {/* Buttons */}
        <ul className="flex flex-wrap gap-1 sm:mt-6 sm:ml-8">
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold cursor-pointer"
            onClick={() => handleComponents("Explore")}
          >
            Explore
          </li>
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold cursor-pointer"
            onClick={() => handleComponents("Deals")}
          >
            Deals
          </li>
          <li
            className="bg-[#F3F4F6] text-[#707481] hover:border-black border-2 flex px-2 py-[6px] justify-center items-center gap-x-1 transition-all duration-300 rounded-lg text-xs font-semibold cursor-pointer"
            onClick={() => handleComponents("Merch")}
          >
            Merch
          </li>
        </ul>

        {/* Render selected component */}
        <div className="mt-4">
          {selectedComponent ? (
            selectedComponent
          ) : (
            <p className="text-gray-500">
              Please select a component to display.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
