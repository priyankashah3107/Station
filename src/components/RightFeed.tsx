import Image from "next/image";
import React from "react";
import Button from "./Button";

const icons = [
  {
    id: 1,
    icon: "/utube.svg",
  },
  {
    id: 2,
    icon: "/twitter.svg",
  },
  {
    id: 3,
    icon: "/instagram.svg",
  },
  {
    id: 4,
    icon: "/tiktok.svg",
  },
];

const RightFeed = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default RightFeed;

function Banner() {
  return (
    <>
      <section className="flex min-h-screen flex-col w-full max-w-[1048px] mx-auto">
        <div className="flex min-h-screen flex-col gap-y-6 p-3 md:p-6 lg:px-9 mx-auto w-full">
          <div className="flex flex-col">
            <Image
              src={"/hoading.png"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-[120px] sm:h-[200px] rounded-xl"
            />

            <div className="flex flex-row justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className=" h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] -bottom-4 sm:bottom-0 -left-1.5 sm:left-2 grid place-items-center cursor-pointer bg-gradient-to-r from-[#FE0307] to-[#D90AB9] rounded-full overflow-hidden ring-[6px] ring-white bg-white group -mt-4 sm:-mt-8  sm:ml-6">
                  <Image
                    src={"/podcast/p4.png"}
                    alt="img"
                    width={100}
                    height={100}
                    className="size-[93px] sm:size-[111px] rounded-full"
                  />
                </div>

                <div className="flex flex-col sm:mt-4">
                  <h1 className="text-[#0E1323] text-lg font-bold">Club 92</h1>
                  <p className="text-sm text-[#0E1323] max-w-[26rem]">
                    Get behind the scenes with exclusive drops, rewards and
                    content only accessible to true 92%ers.
                  </p>
                  <div className="flex flex-row  gap-2 p-1 sm:hidden  ">
                    {icons.map((val) => (
                      <Image
                        src={val.icon}
                        key={val.id}
                        alt="icon"
                        width={40}
                        height={40}
                        className="flex flex-row size-7 hover:bg-[#dbdbdb] p-1 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                {/* <div>logo</div> */}

                <div className="hidden md:flex flex-row mt-4 gap-2 p-1  ">
                  {icons.map((val) => (
                    <Image
                      src={val.icon}
                      key={val.id}
                      alt="icon"
                      width={50}
                      height={50}
                      className="flex flex-row size-8 hover:bg-[#dbdbdb] p-1 rounded-lg"
                    />
                  ))}
                </div>

                <div className="mt-6 sm:mt-4">
                  <Button
                    buttonName="Join Wondery+"
                    color="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white opacity-100 hover:opacity-90 py-2 px-3 shadow"
                    size="px-4 py-2"
                    className="rounded"
                  >
                    Join Wondery+
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
