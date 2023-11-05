import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Quote from "../Images/quotes.png";
import BlueEllipse from "../Images/Ellipse 643.png";
import WhiteEllipse from "../Images/Ellipse 644.png";
import Dots from "../Images/more_vert_black_24dp 1.png";

const SuccessStories = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1215px] mt-36">
      <h1 className=" font-semibold text-center font-poppins text-[44px] text-successColor leading-[61.6px] ">
        See Our Success Stories
      </h1>

      <div className="flex mt-24 items-center justify-center mb-4 ">
        <span className="mr-10">
          <BiChevronLeft
            className="
          text-white bg-mainColor rounded-full w-[46px] h-[46px] "
          />
        </span>
        <div className="flex items-center justify-center w-[155px] h-[230px] bg-mainColor rounded-tl-3xl rounded-bl-3xl">
          <Image src={Quote} width={60} height={71.07} alt="quotes" />
        </div>

        <div className="flex max-w-[961px] bg-white font-Nunito rounded-tr-2xl rounded-br-2xl 
        shadow-[-5px_-5px_15px_0px_rgba(0,0,0,0.1)_inset] drop-shadow-[5px_5px_15px_rgba(0,0,0,0.1)]">
          <div className="max-w-[644px] pl-8 pt-12 mr-10">
            <p className="text-[16.2px] font-normal leading-7">
              There are many variations of passages of Lorem Ipsum available but
              the majority have sufferg alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage.
            </p>
            <p className="text-right font-semibold text-[20px]">
              -Abcdefgh Ijklmnop
            </p>
            <p className="text-right font-normal text-lg mb-3">
              Frontend Engineer
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src={BlueEllipse}
              width={120}
              height={120}
              alt="blueEllipse"
            />
            <div className="absolute">
              <Image
                src={WhiteEllipse}
                width={100}
                height={100}
                alt="whiteEl"
              />
            </div>
          </div>
        </div>
        <span className="ml-10">
          <BiChevronRight
            className="
          text-white bg-mainColor rounded-full w-[46px] h-[46px] "
          />
        </span>
      </div>
      <Image src={Dots} width={60} height={60} alt="dots" />
    </div>
  );
};

export default SuccessStories;
