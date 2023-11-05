import Image from "next/image";
import Social from "../Images/Social.png";
import Mail from "../Images/mail.png";

const Footer = () => {
  return (
    <div className=" bg-[#C6DEFF1A] flex flex-col justify-center mt-20 px-80 py-20">
      <div className=" flex ">
        <div className="w-[50%]">
          <p className="text-[#494369] leading-[28.8px] text-base font-normal font-NunitoSans mt-10 ">
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows
          </p>
          <div className="w-[208px] flex mt-5">
            <Image src={Social} width={163} height={41} alt="social" />
            <div className="flex items-center justify-center ml-5">
              <Image src={Mail} width={22} height={22} alt="mail" />
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-10">
          <h1 className=" text-[#332C5C] font-poppins font-semibold text-[24px] leading-[38.4px]">
            Our Links
          </h1>
          <ul className="font-NunitoSans text-base font-medium text-[#494369]">
            <li className=" my-2 ">Home</li>
            <li className=" my-2">About us</li>
            <li className=" my-2">Integrations</li>
            <li className=" my-2">Team</li>
            <li className=" my-2">Blog</li>
          </ul>
        </div>
        {/* services */}
        <div className=" flex flex-col ml-20">
          <h1 className=" text-[#332C5C] font-poppins font-semibold text-[24px] leading-[38.4px]">
            Our Services
          </h1>
          <ul className="font-NunitoSans text-base font-medium text-[#494369] ">
            <li className=" my-2">Infrastructure provisioning</li>
            <li className=" my-2">Network infrastructure automation</li>
            <li className=" my-2">Cost optimization</li>
            <li className=" my-2">Cloud migration</li>
            <li className=" my-2">Kubernetes at scale</li>
          </ul>
        </div>
        {/* other links */}
        <div className="flex flex-col ml-20">
          <h1 className=" text-[#332C5C] font-poppins font-semibold text-[24px] leading-[38.4px]">
            Other Links
          </h1>
          <ul className="font-NunitoSans text-base font-medium text-[#494369] ">
            <li className="my-2">FAQ</li>
            <li className="my-2">Careers</li>
            <li className=" my-2">Privacy Policy</li>
            <li className=" my-2">Terms & Condition</li>
            <li className=" my-2">Support</li>
          </ul>
        </div>
      </div>
      {/* terms and conditions */}
      <div className=" font-NunitoSans flex text-[18px] leading-[32.4px] text-[#5E587A] justify-between pt-12">
        <h1 className=" font-medium ">Terms & Condition | Privacy Policy</h1>
        <h1 className=" text-lg font-bold ">
          Copyright © 2023 EXOCODE TECHNOLOGIES |
          <span className="font-normal"> All rights reserved</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
