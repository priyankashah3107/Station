import React from "react";
import Card from "./Card";
import Button from "./Button";

const cardinfo = [
  {
    id: 1,
    title: "Hess5",
    para: "Original Bad News Bears!",
    time: "2d",
    svgimg: "/threedot.svg",
  },
  {
    id: 2,
    title: "JessMcG",
    para: "Signed my 6 year old who is new to the Eagles fandom",
    time: "22h",
    svgimg: "/threedot.svg",
    image: "/fanart/fan1.png",
  },
  {
    id: 3,
    title: "jolecha.art",
    para: "The latest portrait of Jason I drew. Hope you enjoy ☺️",
    time: "22h",
    svgimg: "/threedot.svg",
    image: "/fanart/fan2.png",
  },
  {
    id: 4,
    title: "Emzlee.09",
    para: "She is so proud of herself",
    time: "22h",
    svgimg: "/threedot.svg",
    image: "/fanart/fan3.png",
  },
  {
    id: 5,
    title: "Elisemom2016",
    para: "My 8 year old daughter's drawing of Travis!",
    time: "22h",
    svgimg: "/threedot.svg",
    image: "/fanart/fan4.png",
  },
  {
    id: 6,
    title: "IamNK",
    para: "Last time chiefs and Eagles made it to the Super Bowl, Kylie was also pregnant and ready to give birth. If it is another Eagles and Chiefs matchup does the new baby girl get an eagles inspired name and which jersey are you sporting Jason",
    time: "3d",
    svgimg: "/threedot.svg",
  },
];

const FanArt = () => {
  return (
    <>
      <div className="grid grid-cols-1  gap-4">
        {cardinfo.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            para={card.para}
            time={card.time}
            svgimg={card.svgimg}
            image={card?.image}
          />
        ))}

        <div className="flex justify-center">
          <Button
            buttonName="Login to load more"
            color="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-white text-text-primary hover:bg-[#F3F4F6] hover:text-black border border-[#C5CBD5] h-10 px-7 py-2 w-44 font-semibold mt-4"
            size="px-6 py-2.5"
            className="rounded"
          >
            Login to load more
          </Button>
        </div>
      </div>
    </>
  );
};

export default FanArt;
