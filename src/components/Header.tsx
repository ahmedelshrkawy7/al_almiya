import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import assets from "./imports";

const Header = () => {
  return (
    <div className="h-screen flex flex-col bg-[var(--background-blue)] text-white">
      <Nav />
      <div
        className="flex flex-col md:mt-5  bg-no-repeat bg-center h-full md:px-12 "
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "contain",
        }}
      >
        <div className=" flex justify-around w-full">
          <h2 className="text-[37px] font-bold leading-[60px]">
            مرحبًا بكم في موقعنا الخاص <br />
            بخدمات كشف العوازل
            <br /> وتسريب المياه
          </h2>

          <div className=" bg-[var(--lightBlue)] md:w-[336px] md:h-[93px] rounded-[50px] p-5 ">
            نهتم بتلبية احتياجاتكم. سواء كنتم تحتاجون إلى إصلاح أو تركيب أنابيب
            الماء أو الصرف الصحي.
          </div>
        </div>
        <div className="flex justify-start items-center h-full  ">
          <Image src={assets.worker} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;