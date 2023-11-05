import Image from "next/image";
import PaperPlane from "../Images/Paper Plane.png";

const Subscribe = () => {
  return (
    <div className="justify-center items-center">
      <div className="flex flex-col bg-powderBlue justify-center items-center rounded-[60px] max-w-[1398px] mt-20 py-16 mb-64">
        <Image src={PaperPlane} width={150} height={150} alt="logo" />
        <h1 className="text-[44px] text-center font-poppins font-semibold leading-[61.6px] py-4 px-60">
          Subscribe To Our Newsletter & Get The Coupon Code.
        </h1>
        <p className="text-[20px] leading-[36px] pt-5 text-center font-NunitoSans text-featurePara">
          All your information is completely confidential
        </p>

        <div className="flex my-20 w-[691px]">
          <input
            type="email"
            placeholder="Type your email"
            className="px-5 py-3 rounded-lg text-sm w-[491px]"
          />
          <button className="bg-mainColor text-[24px] px-[30px] py-3 ml-4 rounded-[10px] text-white font-NunitoSans font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
