import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import LeftCardFeedInfo from "./LeftCardFeedInfo";

const explorecard = [
  {
    id: 1,
    image: "/explore/e1.png",
    title: "Bonus Content",
    para: "Exclusive Bonus Clip",
    link: "Access now",
  },
  {
    id: 2,
    image: "/explore/e2.png",
    title: "Get the Merch",
    para: "Get New Heights Merch",
    link: "Access now",
  },
  {
    id: 3,
    image: "/explore/e3.png",
    title: "Leave your message",
    para: "Call us here -929-399-72",
    link: "Access now",
  },
  {
    id: 4,
    image: "/explore/e4.png",
    title: "Listen Ad Free",
    para: "3 months Wondery+ free",
    link: "Access now",
  },
];

const ExploreLeftPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === explorecard.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? explorecard.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="w-full">
      {/* Mobile Carousel view */}
      <div className="block md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {explorecard.map((va1) => (
              <div key={va1.id} className="w-full flex flex-shrink-0">
                <LeftCardFeedInfo
                  image={va1.image}
                  title={va1.title}
                  para={va1.para}
                  link={va1.link}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Custom Navigation */}

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 z-10 bg-white/50 rounded-full p-1 transform -translate-y-1/2"
        >
          <ChevronLeft className="text-white rounded-md bg-black" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 z-10 bg-white/50 rounded-full p-1 transform -translate-y-1/2"
        >
          <ChevronRight className="text-white rounded-md bg-black" />
        </button>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:flex flex-row gap-4 p-4">
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

export default ExploreLeftPage;
