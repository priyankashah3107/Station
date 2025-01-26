import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeftCardFeedInfo from "./LeftCardFeedInfo";

const explorecard = [
  {
    id: 1,
    image: "/deals/d1.png",
    title: "Bonus Content",
    para: "Exclusive Bonus Clip",
    link: "Access now",
  },
  {
    id: 2,
    image: "/deals/d2.png",
    title: "Get the Merch",
    para: "Get New Heights Merch",
    link: "Access now",
  },
  {
    id: 3,
    image: "/deals/d3.png",
    title: "Leave your message",
    para: "Call us here -929-399-72",
    link: "Access now",
  },
  {
    id: 4,
    image: "/deals/d4.png",
    title: "Listen Ad Free",
    para: "3 months Wondery+ free",
    link: "Access now",
  },

  {
    id: 6,
    image: "/deals/d6.png",
    title: "Listen Ad Free",
    para: "3 months Wondery+ free",
    link: "Access now",
  },
  {
    id: 7,
    image: "/deals/d7.png",
    title: "Listen Ad Free",
    para: "3 months Wondery+ free",
    link: "Access now",
  },
];

const Deals = () => {
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
      {/* Mobile Carousel View */}
      <div className="block md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {explorecard.map((val) => (
              <div key={val.id} className="w-full flex-shrink-0">
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
          className="absolute top-1/2 left-2 z-10 bg-white/50 rounded-full p-1 transform -translate-y-1/2 "
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

export default Deals;
