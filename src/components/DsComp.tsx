import Image from "next/image";
import React from "react";
import assets from "./imports";

interface DsCompProps {
  icon: any;
  h: string;
  p: string;
}

const DsComp = ({ icon, h, p }: DsCompProps) => {
  return (
    <div className="flex items-center  gap-5 p-5 ">
      <div className="p-5 rounded-full  bg-[#F7F7FC]">
        <Image src={icon} alt="" />
      </div>
      <div>
        <h2 className="text-xl text-black font-medium"> {h}</h2>
        <p className="text-lg font-normal text-[#ADB3DA]">{p}</p>
      </div>
    </div>
  );
};

export default DsComp;
