import React from "react";
import assets from "./imports";
import DsComp from "./DsComp";

const Advantages = ({ data: ourServices }) => {
  console.log("🚀 ~ Advantages ~ ourServices:", ourServices);
  //  {
  //               "id": 2,
  //               "title": "مهارة وخبرة فريق العمل",
  //               "desc": "<p>يتمتع فريقنا بسنوات من الخبرة في المجال لضمان تقديم خدمات عالية الجودة.</p>",
  //               "image": "https://phpv8.aait-d.com/leak_detection/public/storage/images/what_we_offers/VgSUTjHh9I7KwSg2vwkmvtsPXFmTi5mx6PZagMJg.png"
  //           },
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
          <DsComp
            key={data[0].id}
            image={data[0].image}
            desc={data[0].desc}
            title={data[0].title}
          />
          <DsComp
            key={data[1].id}
            image={data[1].image}
            desc={data[1].desc}
            title={data[1].title}
          />
        </div>
        <div className="flex flex-col gap-[200px] w-[462px] self-end ">
          <DsComp
            key={data[2].id}
            image={data[2].image}
            desc={data[2].desc}
            title={data[2].title}
          />
          <DsComp
            key={data[3].id}
            image={data[3].image}
            desc={data[3].desc}
            title={data[3].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
