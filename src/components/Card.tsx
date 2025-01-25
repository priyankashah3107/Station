"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  title: string;
  para: string;
  time?: string;
  svgimg?: string;
  image?: string;
}

// Dynamically import emoji picker to avoid SSR issues
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const Card: React.FC<CardProps> = ({ title, para, time, svgimg, image }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  return (
    <>
      <div className="flex flex-col shadow-[0_1px_3px_0_rgba(166,175,195,0.4)] rounded-lg m-1 p-4 bg-white">
        <div className="flex items-center justify-between gap-y-3 gap-[10px] w-full">
          <h3 className="text-base font-semibold text-text-primary text-nowrap truncate max-w-48">
            {title}
          </h3>
          <div className="flex items-center gap-1">
            {time && (
              <p className="text-xs font-medium text-gray-500">{time}</p>
            )}
            {svgimg && (
              <Image
                src={svgimg}
                alt="Icons"
                width={30}
                height={30}
                className="w-6 h-6 flex items-center text-gray-400 hover:text-gray-600"
              />
            )}
          </div>
        </div>
        <p className="text-text-primary font-normal flex flex-col gap-2 mt-2">
          {para}
        </p>
        {image && (
          <Image
            src={image}
            alt="Card Visual"
            width={300}
            height={400}
            className="rounded-lg mt-3 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Add a Comment"
          className="outline-none focus:ring-0 p-2 rounded-md mt-2"
        />

        <div className="flex flex-row gap-4 items-center">
          {/* Smiley Icon to trigger the emoji picker */}
          <div className="flex items-center ">
            <button
              onClick={toggleEmojiPicker}
              className="p-2 rounded-full hover:bg-gray-200"
            >
              <svg
                className="size-[18px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                fill="currentColor"
              >
                <path d="M10.1217 21C8.72692 21 7.41619 20.7343 6.18948 20.203C4.96278 19.6717 3.89004 18.9464 2.97126 18.0271C2.05249 17.1078 1.32759 16.0345 0.796552 14.8071C0.265517 13.5797 0 12.2683 0 10.8728C0 9.47727 0.266352 8.16386 0.799055 6.93253C1.33178 5.7012 2.05474 4.63012 2.96795 3.71928C3.88116 2.80843 4.95504 2.08735 6.18959 1.55602C7.42411 1.0247 8.73257 0.759036 10.1149 0.759036C10.9241 0.759036 11.7044 0.847818 12.4559 1.02538C13.2073 1.20295 13.9189 1.45995 14.5908 1.79639C14.5234 1.94819 14.477 2.10422 14.4517 2.26446C14.4264 2.4247 14.4138 2.59759 14.4138 2.78313C14.4138 2.90424 14.418 3.01886 14.4264 3.12698C14.4349 3.2351 14.4559 3.34819 14.4897 3.46627C13.849 3.07831 13.1636 2.78313 12.4333 2.58072C11.7029 2.37831 10.9302 2.27711 10.1149 2.27711C7.73267 2.27711 5.70415 3.11205 4.02939 4.78193C2.35462 6.45181 1.51724 8.48024 1.51724 10.8672C1.51724 13.2542 2.35582 15.2868 4.03298 16.9648C5.71012 18.6429 7.74154 19.4819 10.1272 19.4819C12.5129 19.4819 14.5402 18.6441 16.2092 16.9684C17.8782 15.2927 18.7126 13.2631 18.7126 10.8795C18.7126 10.2386 18.6452 9.61024 18.5103 8.99458C18.3755 8.37892 18.1816 7.8012 17.9287 7.26145C18.1136 7.36702 18.3157 7.44824 18.5352 7.5051C18.7546 7.56194 18.9824 7.59036 19.2184 7.59036H19.446C19.5134 7.59036 19.5893 7.58193 19.6736 7.56506C19.859 8.08795 19.9981 8.62349 20.0908 9.17169C20.1835 9.71988 20.2299 10.2892 20.2299 10.8795C20.2299 12.2627 19.9644 13.5718 19.4333 14.807C18.9023 16.0422 18.1816 17.1167 17.2713 18.0304C16.3609 18.9441 15.2904 19.6675 14.0598 20.2005C12.8291 20.7335 11.5164 21 10.1217 21ZM13.8069 9.53855C14.2014 9.53855 14.5276 9.40952 14.7855 9.15145C15.0434 8.89337 15.1724 8.56699 15.1724 8.17229C15.1724 7.77759 15.0434 7.4512 14.7855 7.19313C14.5276 6.93506 14.2014 6.80602 13.8069 6.80602C13.4124 6.80602 13.0862 6.93506 12.8283 7.19313C12.5703 7.4512 12.4414 7.77759 12.4414 8.17229C12.4414 8.56699 12.5703 8.89337 12.8283 9.15145C13.0862 9.40952 13.4124 9.53855 13.8069 9.53855ZM6.42299 9.53855C6.81747 9.53855 7.14368 9.40952 7.40161 9.15145C7.65954 8.89337 7.78851 8.56699 7.78851 8.17229C7.78851 7.77759 7.65954 7.4512 7.40161 7.19313C7.14368 6.93506 6.81747 6.80602 6.42299 6.80602C6.02851 6.80602 5.7023 6.93506 5.44437 7.19313C5.18644 7.4512 5.05747 7.77759 5.05747 8.17229C5.05747 8.56699 5.18644 8.89337 5.44437 9.15145C5.7023 9.40952 6.02851 9.53855 6.42299 9.53855ZM10.1149 16.4205C11.2276 16.4205 12.2517 16.1211 13.1874 15.5223C14.123 14.9235 14.8015 14.1096 15.223 13.0807H5.0069C5.44521 14.1096 6.12797 14.9235 7.05517 15.5223C7.98238 16.1211 9.0023 16.4205 10.1149 16.4205ZM18.4598 3.54217H17.1954C16.9805 3.54217 16.8003 3.46901 16.6549 3.32268C16.5095 3.17634 16.4368 2.99501 16.4368 2.7787C16.4368 2.56238 16.5095 2.38253 16.6549 2.23916C16.8003 2.09578 16.9805 2.0241 17.1954 2.0241H18.4598V0.759036C18.4598 0.543976 18.5329 0.363705 18.6791 0.218223C18.8254 0.072741 19.0066 0 19.2228 0C19.439 0 19.6188 0.072741 19.7621 0.218223C19.9054 0.363705 19.977 0.543976 19.977 0.759036V2.0241H21.2414C21.4563 2.0241 21.6365 2.09726 21.7819 2.24358C21.9273 2.38993 22 2.57125 22 2.78756C22 3.00389 21.9273 3.18373 21.7819 3.32711C21.6365 3.47048 21.4563 3.54217 21.2414 3.54217H19.977V4.80723C19.977 5.02229 19.9039 5.20256 19.7576 5.34804C19.6114 5.49352 19.4302 5.56627 19.214 5.56627C18.9978 5.56627 18.818 5.49352 18.6747 5.34804C18.5314 5.20256 18.4598 5.02229 18.4598 4.80723V3.54217Z"></path>
              </svg>
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="size-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            ></path>
          </svg>
          {/* Conditionally render Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute z-50 mt-20">
              <EmojiPicker
                onEmojiClick={(emoji, event) => {
                  console.log("Selected emoji:", emoji.emoji);
                  setShowEmojiPicker(false); // Close the picker after selection
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
