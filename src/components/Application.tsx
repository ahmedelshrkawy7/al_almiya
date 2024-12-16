import Image from "next/image";
import React from "react";
import assets from "./imports";

const Application = () => {
  return (
    <div className="flex h-screen items-center justify-between md:px-40">
      <div className="flex flex-col gap-20">
        <h2 className="text-[60px] leading-[80px] font-medium">
          مهمتنا هي توفير خدمات منزلك <br />
          بأقل التكاليف
        </h2>
        <p className="text-xl text-[var(--light-gray)]">
          حمل تطبيقنا مجانا <br />
          استمتع بالطلب السريع للفني و الخدمة في اي وقت
        </p>

        <div className="flex gap-3 items-center">
          <Image src={assets.googlePlay} alt="googleplay" />
          <Image src={assets.appleStore} alt="applestore" />
        </div>
      </div>
      <div>
        <Image src={assets.smartPhone} alt="smartphone" width={516} />
      </div>
    </div>
  );
};

export default Application;
