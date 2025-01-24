import { ArrowDown, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const podcast = [
  {
    id: 1,
    image: "/podcast/p1.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 2,
    image: "/podcast/p2.png",
    tag: "Sports",
    title: "Chiefs News Daily",
    para: "Join the Chiefs News Daily Loyal Listeners Club with Hayley Lewis and get exclusive access to rewards and special opportunities from KC Sports Network... IT'S FREE!",
  },
  {
    id: 3,
    image: "/podcast/p3.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 4,
    image: "/podcast/p4.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 5,
    image: "/podcast/p5.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 6,
    image: "/podcast/p6.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 7,
    image: "/podcast/p7.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 8,
    image: "/podcast/p8.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 9,
    image: "/podcast/p9.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 10,
    image: "/podcast/p10.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 11,
    image: "/podcast/p12.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 13,
    image: "/podcast/p13.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 14,
    image: "/podcast/20.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 15,
    image: "/podcast/24.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
  {
    id: 16,
    image: "/podcast/p13.png",
    tag: "248 Sports Left",
    title: "Podcast P with Paul George",
    para: "Join NBA star Paul George & friends for laughs, stories, and insights on life in the basketball world.",
  },
];

const Explore = () => {
  return (
    <section className="flex flex-col w-full bg-[#F3F4F6] mx-auto items-center justify-center py-12 gap-8">
      <div className="flex flex-col gap-5 md:gap-9 mx-auto relative w-full max-w-[1400px]">
        <h2 className="text-text-primary text-[22px] md:text-[28px] tracking-tight font-bold w-full max-w-6xl mx-auto text-center lg:px-8">
          Explore Podcast Communities 📻
        </h2>

        <div className="w-full gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-x-auto whitespace-nowrap scrollbar-hide  px-4 py-2">
          {podcast?.map((val) => (
            <Link
              href={"/chiefsnewsdaily"}
              key={val.id}
              className="lg:min-w-[264px] lg:max-w-[264px] h-full w-full relative rounded-[10px] border border-tertiary cursor-pointer lg:hover:-translate-y-1 transition-all duration-300 bg-white p-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col gap-3"
            >
              <Image
                src={val.image}
                alt={val.title}
                height={300}
                width={400}
                className="relative lg:max-h-[244px] lg:max-w-[244px] w-full rounded-[6px] object-cover bg-white cursor-pointer !aspect-square overflow-hidden"
              />
              <p className="bg-black/60 absolute top-4 right-4 rounded-md px-3 py-1 text-white text-[10px] font-semibold flex items-center z-10">
                {val.tag}
              </p>

              <div className="flex flex-col gap-3 w-full mx-auto justify-between ">
                <h2 className="w-full text-nowrap overflow-hidden truncate font-extrabold lg:text-lg text-[#707481] mt-3">
                  {val.title}
                </h2>
                <p className="text-sm text-[#707481]  line-clamp-2">
                  {val.para}
                </p>

                <div className="flex flex-row justify-between text-xs lg:text-sm text-[#707481] ">
                  <p className="underline">Enter Station</p>
                  <ArrowRightCircle />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <Link
            href="/explore"
            className="px-4 flex items-center text-gray-600"
          >
            Show More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
          <div className="flex-grow border-t border-gray-300"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Explore;
