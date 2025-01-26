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

export default Merch;
