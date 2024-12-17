import Image from "next/image";
import React from "react";

interface DsCompProps {
  image: any;
  title: string;
  desc: string;
}

const DsComp = ({ image, title, desc }: DsCompProps) => {
  return (
    <div className="flex items-center  gap-5 p-5 ">
      <div className="">
        <Image src={image} alt="" width={50} height={50} />
      </div>
      <div>
        <h2 className="text-xl text-black font-medium"> {title}</h2>
        <p className="text-lg font-normal text-[#ADB3DA]">{desc}</p>
      </div>
    </div>
  );
};

export default DsComp;
