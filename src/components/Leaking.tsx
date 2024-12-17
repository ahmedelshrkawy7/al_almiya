import Image from "next/image";
import React from "react";
import assets from "./imports";
import Label from "./uicomp/Label";
import Button from "./uicomp/Button";

const Leaking = () => {
  return (
    <div className="min-h-screen flex items-center md:px-60">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center md:gap-40 gap-20 w-full ">
        <div>
          <Image src={assets.leaking} alt="repair leaking" />
        </div>
        <div>
          <Label head="خدمة تسريب المياه" text="إصلاح وتسريب المياه" />
          <p className="text-lg text-[#BDBDD3] mt-5 ">
            نحن فريق من الخبراء نهتم بتلبية احتياجاتكم في مجال الصيانة . سواء
            كنتم تحتاجون إلى إصلاح أو تركيب أنابيب الماء أو الصرف الصحي، أو
            تركيب أجهزة الحمام والمطبخ، فإننا هنا لنساعدكم. نحن نقدم خدماتنا
            للعملاء في جميع أنحاء المدينة ونضمن لكم جودة العمل والموثوقية في كل
            مشروع نقوم به.
          </p>

          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center gap-5">
              <Image src={assets.tick} alt="tick" />
              <span className="text-lg font-normal text-black">
                مدة الضمان قد تختلف حسب نوع الخدمة التي تم تقديمها
              </span>
            </div>
            <div className="flex items-center gap-5">
              <Image src={assets.tick} alt="tick" />
              <span className="text-lg font-normal text-black">
                ضمانًا على المواد التي نستخدمها في الأعمال التي نقوم بها{" "}
              </span>
            </div>
            <div className="flex items-center gap-5">
              <Image src={assets.tick} alt="tick" />
              <span className="text-lg font-normal text-black">
                تقديم خدمات عالية الجودة ونضمن رضا العملاء
              </span>
            </div>
          </div>
          <Button text="تواصل معنا" />
        </div>
      </div>
    </div>
  );
};

export default Leaking;
