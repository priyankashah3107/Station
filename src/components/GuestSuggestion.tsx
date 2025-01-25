import React from "react";
import Card from "./Card";
import Button from "./Button";

const cardinfo = [
  {
    id: 1,
    title: "New Heights",
    para: "Welcome to the Football Talk channel. This is our spot to talk game analysis, latest news, super bowl and connect with fellow fans.",
    time: "2d",
    svgimg: "/threedot.svg",
  },
  {
    id: 2,
    title: "NatNat",
    para: "Glad to see both the Eagles and Chiefs move on and hope to see them one more time competing at the top. The Lions have had a couple good seasons but unfortunately fell short. With his assistant coaches moving up to head coaching positions, do you think they will have the same opportunity next year? Coach Campbell is a solid head coach. But as my dad would say one man can not do it all.Also, I am from the south. I DO NOT have the personality fortitude to listen to the 💩 talking going on. I have to say God Bless Y all and Bless their hearts.",
    time: "22h",
    svgimg: "/threedot.svg",
  },
  {
    id: 3,
    title: "NoleFanLisa",
    para: "What do you both think about Boyd on the Texans behavior at the start of Saturday&#39; game?",
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
    title: "NoleFanLisa",
    para: "What do you both think about Boyd on the Texans behavior at the start of Saturday's game?",
    time: "22h",
    svgimg: "/threedot.svg",
  },
  {
    id: 6,
    title: "IamNK",
    para: "Last time chiefs and Eagles made it to the Super Bowl, Kylie was also pregnant and ready to give birth. If it is another Eagles and Chiefs matchup does the new baby girl get an eagles inspired name and which jersey are you sporting Jason",
    time: "3d",
    svgimg: "/threedot.svg",
  },
];

const GuestSuggestion = () => {
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
            // image={card?.image}
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

export default GuestSuggestion;
