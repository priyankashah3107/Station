import React from "react";
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
    <>
      <LeftCardFeedInfo />
    </>
  );
};

export default ExploreLeftPage;
