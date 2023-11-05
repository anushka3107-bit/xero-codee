import Image from 'next/image';
import Line from "../../Images/Line 38.png";
import React from 'react'



export default function CommonCardHeader({
  data,
  children,
}: CommonCardHeaderType): JSX.Element {
  return (
    <div className="max-w-[1115px] flex flex-col items-center mt-36">
      <div className="rounded-[35px] font-poppins font-semibold text-4xl flex flex-col items-center justify-center">
        <h1>{data.heading}</h1>
        <Image src={Line} width={74} height={0} alt="line" />
      </div>
      <div className="flex flex-col  items-center justify-center">
        <h1 className="text-center text-[#332C5C] text-2xl font-semibold mt-[80px] ">
          {data.title}
        </h1>

        <p className="text-[#5E587A] text-base font-normal mt-4 text-center">
          {data.desc}
        </p>
      </div>
      {children}
    </div>
  );
}
