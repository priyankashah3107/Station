import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeftCardFeedInfo from "./LeftCardFeedInfo";

const explorecard = [
  {
    id: 1,
    image: "/merch/m1.png",
    title: "Alright Nah New Heights",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 2,
    image: "/merch/m2.png",
    title: "New Heights",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 3,
    image: "/merch/m3.png",
    title: "Leave your message",
    papara: "$30",
    link: "Shop now",
  },
  {
    id: 4,
    image: "/merch/m4.png",
    title: "Listen Ad Free",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 5,
    image: "/merch/m5.png",
    title: "Listen Ad Free",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 6,
    image: "/merch/m6.png",
    title: "Listen Ad Free",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 7,
    image: "/merch/m7.png",
    title: "Listen Ad Free",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 8,
    image: "/merch/m8.png",
    title: "Listen Ad Free",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 9,
    image: "/merch/m9.png",
    title: "New Heights Products",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 10,
    image: "/merch/m10.png",
    title: "New Heights New",
    para: "$30",
    link: "Shop now",
  },
  {
    id: 11,
    image: "/merch/m11.png",
    title: "New Heights",
    para: "$30",
    link: "Shop now",
  },
];

const Merch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = {
    mobile: 1.2,
    desktop: 4,
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, explorecard.length - itemsPerPage.mobile)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="w-full">
      {/* Mobile Carousel View */}
      <div className="block md:hidden relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / itemsPerPage.mobile)
              }%)`,
              width: `${explorecard.length * (100 / itemsPerPage.mobile)}%`,
            }}
          >
            {explorecard.map((val) => (
              <div
                key={val.id}
                className="py-4 w-full"
                style={{ width: `${100 / itemsPerPage.mobile}%` }}
              >
                <LeftCardFeedInfo
                  image={val.image}
                  title={val.title}
                  para={val.para}
                  link={val.link}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Custom Navigation */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute top-1/2 left-2 z-10 bg-white/50 rounded-full p-1 disabled:opacity-50"
        >
          <ChevronLeft className="text-black" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= explorecard.length - itemsPerPage.mobile}
          className="absolute top-1/2 right-2 z-10 bg-white/50 rounded-full p-1 disabled:opacity-50"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden sm:flex flex-row gap-4">
        {explorecard.map((val) => (
          <LeftCardFeedInfo
            key={val.id}
            image={val.image}
            title={val.title}
            para={val.para}
            link={val.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Merch;
