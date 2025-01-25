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
      <div className="min-w-[174px] max-w-[174px] min-h-[258px] max-h-[258px] relative rounded-[10px] border border-[#f1f1f1] cursor-pointer lg:hover:-translate-y-1 transition-all duration-300 bg-white shadow">
        <div className="flex items-center justify-center px-[10px] pt-[10px] ">
          {image && (
            <Image
              src={image}
              alt="img"
              width={140}
              height={155}
              className="w-[158px] h-[148px] rounded-[6px] object-cover bg-white cursor-pointer"
            />
          )}
        </div>

        <div className="flex flex-col gap-1">
          <h2>{title}</h2>
          <p>{para}</p>
        </div>
        <button>{link}</button>
      </div>
    </>
  );
};

export default LeftCardFeedInfo;
