import React from "react";
import Card from "./Card";
import Button from "./Button";

const cardinfo = [
  {
    id: 1,
    title: "Rubicon56",
    para: "Gentlemen! I just heard your tentative post season vacation plans on the latest pod. After you get your toes warm in the sand come on out to the Tetons for some cowboy hats and ski time! We'll get you dialed up with all the best. Great kids ski school, sleigh rides through herds of elk, snowmobile rides, epic scenery and maybe a slice and a steak at our local Philly football joint. Just saying, we're all here for a good time. We'd be stoked to have you out!",
    time: "2d",
    svgimg: "/threedot.svg",
    image: "/trending/t4.png",
  },
  {
    id: 2,
    title: "Monte",
    para: "Our daughter just received her University of Pittsburgh ultimate frisbee uniform. I wonder why she picked this number.",
    time: "22h",
    svgimg: "/threedot.svg",
  },
  {
    id: 3,
    title: "Monte",
    para: "Our daughter just received her University of Pittsburgh ultimate frisbee uniform. I wonder why she picked this number.",
    time: "22h",
    svgimg: "/threedot.svg",
  },
  {
    id: 4,
    title: "Teton_Birds_Fan",
    para: "Gentlemen! I just heard your tentative post season vacation plans on the latest pod. After you get your toes warm in the sand come on out to the Tetons for some cowboy hats and ski time! We'll get you dialed up with all the best. Great kids ski school, sleigh rides through herds of elk, snowmobile rides, epic scenery and maybe a slice and a steak at our local Philly football joint. Just saying, we're all here for a good time. We'd be stoked to have you out!",
    time: "22h",
    svgimg: "/threedot.svg",
  },
  {
    id: 5,
    title: "Rubicon56",
    para: "So on the recent episode close to end, I was about to turn it off, but I noticed that there was 2 minutes left so I continued to listen, and the bit of the foreign commentators is gold!!! 🙌 But I was a little offended when Jason thought it was Japanese, it was Korean (Hangul) but I can understand how it can get confusing, not super offended but I thought I should just put that out there. I was just super hyped to hear my native language on the new heights podcast 화이팅!!! (Fighting!!! A common cheer in Korea)",
    time: "22h",
    svgimg: "/threedot.svg",
  },
  {
    id: 6,
    title: "BRTHLYSHV62",
    para: "No dumb question here…so this has bothered me for years…at the end of the 4th quarter every single out of bounds play stops the clock…during the rest of regulation game play it seems they stop the clock but almost immediately start it up again…why is this so? Should not out of bounds dictate the clock stop every time until the next snap? GO BIRDS! Also, go Trav! Until the birds meet you in the superbowl! Sorry dude…I bleed green! Go birds!🦅",
    time: "3d",
    svgimg: "/threedot.svg",
  },
];

const Feed = () => {
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
            image={card.image}
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

export default Feed;
