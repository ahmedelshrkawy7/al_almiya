import React from "react";
import Label from "./uicomp/Label";
import Button from "./uicomp/Button";
import Image from "next/image";

const Professionals = ({ data: home_experts }) => {
  return (
    <div className="md:px-40 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <Label head="خبرائنا" text="افضل خبراء لدينا" />
        <Button text="تواصل معنا" />
      </div>

      {/* Professionals Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center gap-10">
        {home_experts?.map((expert) => (
          <div
            className="flex flex-col items-center w-[350px] h-[480px] "
            key={expert.id}
          >
            <Image
              src={expert.image}
              alt={expert.name}
              width={343}
              height={383}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col items-center gap-1 mt-6">
              <h3> {expert.job}</h3>
              <p>{expert.name} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
