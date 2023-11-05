import React from "react";
import Image from "next/image";
import Rocket from "../../Images/Rocket.png";
import CardComponents from "./CardComponents";

const Xcodeway = () => {
  return (
    <div className=" max-w-[1398px] rounded-[35px] flex flex-col">
      <div className="flex w-[100%] items-center justify-center mt-10 font-poppins font-semibold text-[44px] leading-[55px]">
        <h1 className=" text-[#242331] text-center">The Xerocodee way</h1>
        <Image
          src={Rocket}
          width={50}
          height={50}
          alt="rocket"
          className="ml-4"
        />
      </div>
      <CardComponents />
    </div>
  );
};

export default Xcodeway;
