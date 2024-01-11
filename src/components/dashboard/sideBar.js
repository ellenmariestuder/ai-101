import Image from "next/image";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";

const SideBar = () => {
  const sideBarLinks = [
    { icon: <FaHome color="#063C5F" size={22} />, item: "Home" },
    { icon: <HiOutlineDesktopComputer color="#063C5F" />, item: "Practice" },
    { icon: <FaUser color="#063C5F" />, item: "Profile" },
  ];
  return (
    <div className=" bg-backgroundSecondary flex flex-col w-1/3 h-full min-h-screen items-start py-10 px-5 relative">
      <Image src={"/AI-101.png"} alt="logo" width={250} height={250} />
      <div className="h-full ">
        <div className="flex flex-col mt-20 gap-12 items-start">
          {sideBarLinks.map((singleLink) => (
            <div className="flex flex-row items-center justify center gap-2">
              <div>{singleLink.icon}</div>
              <div className="text-lg font-medium  text-[#9197b3]">
                {singleLink.item}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify center gap-2 absolute bottom-10">
          <div>
            <CiLogout />
          </div>

          <div className="text-lg font-medium  text-[#9197b3] ">LogOut</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
