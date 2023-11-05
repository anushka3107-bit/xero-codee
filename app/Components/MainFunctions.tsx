import React from "react";
import Image from "next/image";
import CardScreen from "../Images/Cards Screen.png";
import CardScreen1 from "../Images/Cards Screen (1).png";

const MainFunctions = () => {
  return (
    <div className="items-center justify-center mb-24">
      <div className="bg-mainColor mt-20 mx-20 rounded-[35px]">
        <h1 className="text-[44px] text-center font-semibold font-poppins leading-[61.6px] text-white pt-32 px-44">
          Modernize Apps, Infrastructure With Cloud Native Tech For Resilience,
          Scalability.
        </h1>
        <div className="flex px-36 py-28 items-center justify-center">
          <Image src={CardScreen} width={693} height={357} alt="card" />
          <div className="flex flex-col pr-48 text-left">
            <h1 className="font-semibold font-poppins leading-[61.6px] text-white text-[44px] mb-4">
              Real-Time Risk Monitoring
            </h1>
            <p className="text-white text-[17px] font-NunitoSans leading-9">
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </p>
          </div>
        </div>
        <div className="flex px-60 pb-32 items-center justify-center">
          <div className="flex flex-col pr-20 text-left">
            <h1 className="font-semibold font-poppins leading-[61.6px] text-white text-[44px]">
              Collaborative Workflows
            </h1>
            <p className="text-white text-[17px] font-NunitoSans leading-9 ">
              Share artefacts easily and collaborate with team members,
              auditors, and pen testers via automated procedures. To manage
              daily compliance with automatic notifications and reminders,
              create, assign, and track tasks.
            </p>
          </div>
          <Image src={CardScreen1} width={565} height={518} alt="card1" />
        </div>
      </div>
    </div>
  );
};

export default MainFunctions;
