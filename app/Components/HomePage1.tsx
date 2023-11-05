import React from 'react'
import Image from "next/image";
import Frame25311 from "../Images/Frame 25311.png"
import Nav from "../Images/Frame.svg";
import Frame from "../Images/Frame.png";

const HomePage1 = () => {
  return (
    <div className="mt-20 items-center justify-center">
      <Image
        src={Frame25311}
        width={1728}
        height={200}
        alt="Picture of the author"
      />
      <div className="flex items-center justify-center">
        <button
          className="w-[165px] h-[75px] text-mainColor rounded-[39px] 
      bg-featureBtn mt-[100px] text-lg font-bold font-NunitoSans"
        >
          Features
        </button>
      </div>

      <h1 className="font-semibold font-poppins text-[44px] leading-[55px] mt-20 text-center">
        <span className="text-mainColor"> Save 1000s </span>
        of expensive coder hours
      </h1>
      <p className="text-xl font-NunitoSans font-normal text-featurePara leading-9 text-center mt-6">
        With cloud native technologies, we assist in modernising infrastructure
        and applications for resilience and scalability.
      </p>
      <div className="mt-16 flex items-center justify-center mb-8">
        <Image src={Nav} width={1116} height={37} alt="nav" />
      </div>
      <div className="flex items-center justify-center">
        <Image src={Frame} width={1298} height={666} alt="logo" />
      </div>
    </div>
  );
}

export default HomePage1

