import React from "react";
import Image from "next/image";
import image1 from "../Images/Group.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1114px] w-[100%]">
      <h1 className="mt-10 text-headingColor text-center font-bold leading-18 text-6xl font-poppins">
        Build your audience and grow your brand
      </h1>
      <div className="">
        <p className="text-grayP text-base leading-[43.2px] font-normal text-center font-NunitoSans mt-5">
          no more, no less. Deploy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </p>
      </div>

      <button className="btn rounded-[5px] bg-mainColor items-center flex justify-center mt-10 px-[62px] py-[12px]">
        Get Started Now
      </button>
      <Image
        src={image1}
        width={1464}
        height={591}
        alt="Picture of the author"
      />
    </div>
  );
};

export default HomePage;
