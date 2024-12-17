import Image from "next/image";
import React from "react";
import assets from "./imports";
import DsComp from "./DsComp";
import Button from "./uicomp/Button";

const WhoAreWe = () => {
  const data = [
    {
      icon: assets.icon1,
      h: "خدمة سريعة",
      p: "نحرص علي توفير الوصول السريع لخدمتك",
    },
    {
      icon: assets.icon2,
      h: "فريق مؤهل",
      p: "فريق متدرب و مؤهل",
    },
    {
      icon: assets.icon3,
      h: "عروض حصرية    ",
      p: "عروض متوفرة دائما و نحرص علي اقل التكاليف",
    },
    {
      icon: assets.icon4,
      h: "تقييمات عالية",
      p: "تتميز حدماتنا و خبرائنا بأفضل تقييمات رضا العملاء",
    },
  ];
  return (
    <div className="md:px-40">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 justify-around justify-items-center gap-20  mt-20">
        <div className="flex flex-col gap-3 h-full items-start ">
          <span className="bg-[#F7F7FC] rounded-[50px] p-5 text-center text-[var(--textColor)]">
            من نحن
          </span>
          <h2 className="text-[40px] font-semibold text-black">
            أفضل الفنيين الخبراء لخدمتك
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {data.map((el) => {
              return <DsComp key={el.h} {...el} />;
            })}
          </div>
        </div>
        <div>
          <Image src={assets.whoarewe} alt="whoarewe" />
        </div>
      </div>
      <Button text="اعرف المزيد" />
    </div>
  );
};

export default WhoAreWe;
