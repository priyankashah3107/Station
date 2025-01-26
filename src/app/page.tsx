import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Podcast from "@/components/Podcast";
import Trending from "@/components/Trending ";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Podcast />
      <Trending />
      <Footer />
    </>
  );
}
