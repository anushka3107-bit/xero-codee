import Image from "next/image";
import Img1 from "../Images/Group 25482.png";
import Img2 from "../Images/Group 25483.png";


const ExtraFeature = () => {
  return (
    <div className="flex gap-x-56 items-center justify-center mt-20">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <h1 className="font-bold font-NunitoSans text-[28px] text-[#242331] mb-10">
          Without Xerocodee{" "}
        </h1>
        <Image src={Img1} width={300} height={350} alt="img1" />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center ">
        <h1 className="font-bold font-NunitoSans text-[28px] text-[#242331] mb-10">
          With Xerocodee{" "}
        </h1>
        <Image src={Img2} width={400} height={450} alt="img2" />
      </div>
    </div>
  );
};
export default ExtraFeature;
