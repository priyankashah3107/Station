// import React from "react";
// import LeftCardFeedInfo from "./LeftCardFeedInfo";

// const explorecard = [
//   {
//     id: 1,
//     image: "/explore/e1.png",
//     title: "Bonus Content",
//     para: "Exclusive Bonus Clip",
//     link: "Access now",
//   },
//   {
//     id: 2,
//     image: "/explore/e2.png",
//     title: "Get the Merch",
//     para: "Get New Heights Merch",
//     link: "Access now",
//   },
//   {
//     id: 3,
//     image: "/explore/e3.png",
//     title: "Leave your message",
//     para: "Call us here -929-399-72",
//     link: "Access now",
//   },
//   {
//     id: 4,
//     image: "/explore/e4.png",
//     title: "Listen Ad Free",
//     para: "3 months Wondery+ free",
//     link: "Access now",
//   },
// ];

// const ExploreLeftPage = () => {
//   return (
//     <>
//       <div className="flex flex-row gap-4 p-4">
//         {explorecard.map((val, index) => (
//           <LeftCardFeedInfo
//             key={index}
//             image={val.image}
//             title={val.title}
//             para={val.para}
//             link={val.link}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ExploreLeftPage;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  return (
    <div className="w-full">
      {/* Mobile Carousel View */}
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1.2}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          className="explore-swiper relative"
        >
          {explorecard.map((val) => (
            <SwiperSlide key={val.id} className="py-4">
              <LeftCardFeedInfo
                image={val.image}
                title={val.title}
                para={val.para}
                link={val.link}
              />
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className=" absolute top-1/2 left-2 z-10 bg-white/50 rounded-full p-1">
            <ChevronLeft className="text-black" />
          </div>
          <div className=" absolute top-1/2 right-2 z-10 bg-white/50 rounded-full p-1">
            <ChevronRight className="text-black" />
          </div>
        </Swiper>
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
