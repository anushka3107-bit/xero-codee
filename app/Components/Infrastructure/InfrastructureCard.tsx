import { CardInterface } from "@/app/data/props";
import Image from "next/image";


const InfrastructureCard = ({ title, subtitle, image }: CardInterface) => {
  return (
    <div
      className="flex items-center justify-center shadow-sm shadow-[0px 20px 80px 0px #00000008]
      rounded-lg"
    >
      <div className="w-[72px] h-[72px] bg-white flex items-center justify-center rounded-2xl mx-4 my-4 shadow-lg shadow-[0px 25px 40px 0px #0000000D] ">
        <Image src={image} alt={title} width={40} height={40} />
      </div>

      <div>
        <h1 className="font-poppins text-2xl font-semibold text-[#332C5C]">
          {title}
        </h1>
        <h4 className="font-NunitoSans font-normal text-base text-[#5E587A]">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};

export default InfrastructureCard;
