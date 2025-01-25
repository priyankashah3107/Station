import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightFeed from "./RightFeed";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <LeftNavbar />
        <RightFeed />
      </div>
    </>
  );
};

export default MainPage;
