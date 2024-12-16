import Image from "next/image";
import React from "react";
import assets from "@/components/imports";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";

const Nav = () => {
  return (
    <div className="flex items-center justify-between py-4 px-20">
      <Image src={assets.logo} alt="" width={71} height={37} />

      <div className=" flex items-center gap-6 ">
        <Link href={""}>الرئيسية </Link>
        <Link href={""}>خدمات </Link>
        <Link href={""}>من نحن </Link>
        <Link href={""}> تواصل معانا </Link>
      </div>

      <div className="icons flex items-center gap-6">
        <div className="border border-1 border-white rounded-lg p-3  ">
          <FaRegBell size={22} />
        </div>
        <div className="border border-1 border-white rounded-lg p-3  ">
          <CiUser size={22} />
        </div>
        <div className="flex items-center gap-2">
          EN
          <GrLanguage size={22} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
