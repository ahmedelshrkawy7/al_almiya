import Image from "next/image";
import React from "react";
import assets from "./imports";

const TestmonialsCard = () => {
  return (
    <div className=" bg-[#F7F7FC] p-10 rounded-3xl flex flex-col justify-between gap-4">
      <Image src={assets.qoute} alt="qoute" width={30} />
      <p>
        "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا
        سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا
        المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم."
      </p>

      <div className=" flex gap-5">
        <Image src={assets.woman} alt="" />
        <div className="flex flex-col gap-2">
          <h3>نرمين علي</h3>
          <p>مؤسس شركة CAS</p>
        </div>
      </div>
    </div>
  );
};

export default TestmonialsCard;
