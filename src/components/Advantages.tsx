import React from "react";
import assets from "./imports";
import DsComp from "./DsComp";

const Advantages = () => {
  const data = [
    {
      icon: assets.icon1,
      h: "خدمة سريعة",
      p: "نحن قادرون على التعامل مع مشاكل متنوعة وتلبية احتياجات العملاء بشكل شامل.",
    },
    {
      icon: assets.icon2,
      h: "فريق مؤهل",
      p: "نحن قادرون على التعامل مع مشاكل متنوعة وتلبية احتياجات العملاء بشكل شامل.",
    },
    {
      icon: assets.icon3,
      h: "عروض حصرية    ",
      p: "نحن قادرون على التعامل مع مشاكل متنوعة وتلبية احتياجات العملاء بشكل شامل.",
    },
    {
      icon: assets.icon4,
      h: "تقييمات عالية",
      p: "نحن قادرون على التعامل مع مشاكل متنوعة وتلبية احتياجات العملاء بشكل شامل.",
    },
  ];
  return (
    <div
      className="bg-[var(--background-blue)] h-screen mt-40 bg-contain bg-no-repeat bg-center md:px-40 py-20 "
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="flex w-full h-full justify-between items-center ">
        <div className="flex flex-col gap-[200px] w-[462px] self-start">
          <DsComp key={data[0].h} {...data[0]} />
          <DsComp key={data[1].h} {...data[1]} />
        </div>
        <div className="flex flex-col gap-[200px] w-[462px] self-end ">
          <DsComp key={data[2].h} {...data[2]} />
          <DsComp key={data[3].h} {...data[3]} />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
