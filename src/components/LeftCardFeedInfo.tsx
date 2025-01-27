import React from "react";
import Image from "next/image";
interface LeftCardProps {
  image?: string;
  title?: string;
  para?: string;
  link?: string;
}

const LeftCardFeedInfo: React.FC<LeftCardProps> = ({
  image,
  title,
  para,
  link,
}) => {
  return (
    <>
      <div className="sm:[200px] w-[300px] w-200 sm:[200px] min-h-[290px] max-h-[290px] h-auto relative rounded-[10px] border border-[#f1f1f1] cursor-pointer lg:hover:-translate-y-1 transition-all duration-300 bg-white shadow   ">
        <div className="flex items-center justify-center px-[10px] pt-[10px]   ">
          {image && (
            <Image
              src={image}
              alt="img"
              width={140}
              height={155}
              className="w-[200px] h-[148px] rounded-[6px] object-cover bg-white cursor-pointer"
            />
          )}
        </div>

        <div className="flex flex-col gap-2 p-2 ml-4 mt-2">
          <h2 className="w-full my-auto h-5 text-black font-bold text-sm overflow-hidden">
            {title}
          </h2>
          <p className="w-full text-nowrap text-sm  text-[#6e6e6e] overflow-hidden">
            {para}
          </p>
        </div>
        <button className="ml-6 mt-1 px-2 py-1.5 text-sm bg-black text-white rounded-md justify-center ">
          {link}
        </button>
      </div>
    </>
  );
};

export default LeftCardFeedInfo;
