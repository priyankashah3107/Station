import Button from "@/components/Button";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Podcast from "@/components/Podcast";
import Trending from "@/components/Trending ";
import React from "react";

export default function Home() {
  return (
    <>
      {/* <Button
        buttonName="Claim your station"
        color="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white opacity-100 hover:opacity-90 py-2 px-4 shadow"
        size="px-6 py-3"
        className="rounded"
      >
        Claim your station
      </Button> */}
      <Navbar />
      <HomePage />
      <Podcast />
      <Trending />
    </>
  );
}
