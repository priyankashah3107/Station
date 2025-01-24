import Explore from "@/components/Explore";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Podcast from "@/components/Podcast";
import React from "react";

const explore = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Explore />
    </>
  );
};

export default explore;
