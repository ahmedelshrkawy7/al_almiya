import Image from "next/image";
import React from "react";
import assets from "./imports";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="md:px-40">
      <div className="grid grid-cols-[2fr_2fr_1fr_1fr]  gap-5 p-10 ">
        <div className="flex flex-col gap-4">
          <Image src={assets.blueLogo} alt="logo" />
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
            <br />، لقد تم توليد هذا النص من مولد النص العربى
          </p>
          <div className="flex gap-4">
            <FaFacebookF size={30} />
            <FaTwitter size={30} />
            <FaYoutube size={30} />
            <AiFillInstagram size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-medium">هل لديك أسئلة </p>
          <ul>
            <li className="text-lg font-normal">contact@company.com</li>
            <li className="text-lg font-normal">(414) 687 - 5892</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-medium">الوصول السريع</p>
          <ul>
            <li className="text-lg font-normal">خدماتنا</li>
            <li className="text-lg font-normal">اطلب خدمة</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-xl font-medium">حول موقعنا</p>
          <ul>
            <li className="text-lg font-normal">من نحن</li>
            <li className="text-lg font-normal">تواصل معنا</li>
            <li className="text-lg font-normal">الشروط والاحكام</li>
            <li className="text-lg font-normal">سياسة الخصوصية</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-end">
        <Image src={assets.googlePlay} alt="googleplay" />
        <Image src={assets.appleStore} alt="applestore" />
      </div>
    </div>
  );
};

export default Footer;
