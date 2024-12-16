import Image from "next/image";
import assets from "./imports";

const OurServices = () => {
  return (
    <div className="container mx-auto py-[120px] text-black">
      <div
        className="flex flex-col lg:flex-row items-center justify-between p-12 md:px-24 relative bg-no-repeat bg-cover rounded-3xl py-5 gap-20 lg:h-[420px]"
        style={{ backgroundImage: "url('/images/bg-services.png')" }}
      >
        {/* Header Section */}
        <div className="flex flex-col gap-5 justify-around">
          <div className="bg-white rounded-3xl w-24 text-[var(--textColor)] text-center p-5">
            خدماتنا
          </div>
          <h2 className="text-[24px] md:text-[40px] font-semibold">
            إختر الخدمة اللتي تناسب طلبك و دع <br />
            الامر لخبرائنا
          </h2>
          <p>
            إختر الخدمة و اخبرنا عن مشكلتك و سوف نرسل لك الفني المناسب في اسرع
            وقت
          </p>
        </div>

        {/* Images Section */}
        <div className="flex gap-10 lg:block lg:absolute left-0">
          {/* Item 1 */}
          <div className="p-5 lg:p-10 text-center">
            <Image
              width={220}
              height={250}
              src={assets.seperator}
              alt="فني كشف تسريبات"
              className="bg-white p-5 rounded-xl"
            />
            <p className="text-[var(--textColor)] font-semibold">
              فني كشف تسريبات
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-5 md:p-10 text-center">
            <Image
              width={220}
              height={250}
              src={assets.absorbent}
              alt="فني كشف عوازل"
              className="bg-white p-5 rounded-xl"
            />
            <p className="text-[var(--textColor)] font-semibold">
              فني كشف عوازل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
