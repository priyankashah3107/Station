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
    title: "SueFree61",
    para: "What is the most embarrassing thing that you or a teammate has done in the locker room?",
    time: "22h",
    svgimg: "/threedot.svg",
  },
  {
    id: 5,
    title: "Elmo dog 33",
    para: "What is a touchback,I still do not understand after my dad and brothers explain it to me",
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

const FilmClub = () => {
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

export default FilmClub;
