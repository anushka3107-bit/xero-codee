import Image, { StaticImageData } from 'next/image';
import React from 'react'

export default function CommonCard({item,type} : CommonCardType) {
  return (
    <div
      className={`flex my-20 items-center justify-center gap-[10px] ${
        type === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-[50%] flex items-center justify-center">
        <Image src={item.img} width={item.size ? item.size : 406} alt="img1" />
        {item?.img2 && (
          <Image
            src={item.img2}
            width={item.size ? item.size : 406}
            alt="img1"
          />
        )}
      </div>

      <div className="flex flex-col justify-center w-[50%]">
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-[#332C5C]">
          {item.title}
        </h1>
        <p className="font-NunitoSans font-medium text-base text-[#5E587A] py-4">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
