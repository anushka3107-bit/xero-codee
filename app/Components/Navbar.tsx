import Image from "next/image";
import Logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className="max-w-[1398px] w-[100%] pt-[21px] pb-5 px-[117.2px] flex items-center justify-between mt-4 gap-[33px] rounded-[10px] shadow-[10px_10px_15px_rgba(0,0,0,0.1)] border-[1px]">
      <div className="">
        <Image src={Logo} width={165} height={40} alt="logo" />
      </div>
      <ul className="list-none flex gap-8 cursor-pointer">
        <li>Home</li>
        <li>Team</li>
        <li>Contact</li>
        <li>Career</li>
      </ul>
      <button className="rounded-md text-[1rem] border-2 px-[20px] py-[5px] border-mainColor text-mainColor">
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
