import React from "react";
import Label from "./uicomp/Label";
import Button from "./uicomp/Button";
import Image from "next/image";
import assets from "./imports";

const Professionals = () => {
  const data = [
    {
      image: assets.professional2,
      name: "ندي علي",
      job: "خبير تسريب المياه",
    },
    {
      image: assets.professional3,
      name: " احمد جلال",
      job: "خبير تسريب المياه",
    },
    {
      image: assets.professional1,
      name: "نادر كمال",
      job: "خبير تسريب المياه",
    },
  ];
  return (
    <div className="md:px-40 h-screen">
      <div className="flex items-center justify-between">
        <Label head="خبرائنا" text="افضل خبراء لدينا" />
        <Button text="تواصل معنا" />
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3">
        {data.map((el) => {
          return (
            <div className="flex flex-col items-center ">
              <Image src={el.image} alt="professional 1" />
              <div className="flex flex-col items-center gap-1 mt-6">
                <h3> {el.job}</h3>
                <p>{el.name} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Professionals;
