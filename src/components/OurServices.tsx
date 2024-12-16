import Image from "next/image";
import React from "react";
import assets from "./imports";
import Button from "./uicomp/Button";

const OurServices = () => {
  return (
    <div className="h-screen bg-white flex justify-center items-center  md:p-24 text-black">
      <div
        className="flex items-center justify-between px-24  md:w-[80%]  bg-no-repeat bg-cover  rounded-3xl py-5 gap-20 h-[420px]"
        style={{ backgroundImage: "url('/images/bg-services.png')" }}
      >
        <div className="flex flex-col gap-5 justify-around">
          <div className="bg-white rounded-3xl w-24 text-[var(--textColor)] text-center align-middle p-5">
            خدماتنا
          </div>
          <h2 className="text-[40px] font-semibold">
            إختر الخدمة اللتي تناسب طلبك و دع <br />
            الامر لخبرائنا
          </h2>

          <p>
            إختر الخدمة و اخبرنا عن مشكلتك و سوف نرسل لك الفني المناسب في اسرع
            وقت
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white p-10 rounded-[30px] flex flex-col justify-between items-center gap-3">
            <Image src={assets.absorbent} alt="" />
            <p>فني كشف تسريبات</p>
          </div>
          <div className="bg-white p-10 rounded-[30px] flex flex-col justify-between items-center gap-3">
            <Image src={assets.seperator} alt="" />
            <p>فني كشف عوازل</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
