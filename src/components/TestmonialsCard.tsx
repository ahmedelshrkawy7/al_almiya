import Image from "next/image";
import React from "react";
import assets from "./imports";

const TestmonialsCard = ({ name, job, desc, image }) => {
  return (
    <div className=" bg-[#F7F7FC] p-10 rounded-3xl flex flex-col justify-between gap-4">
      <Image src={assets.qoute} alt="qoute" width={30} height={30} />
      <p>{desc}</p>

      <div className=" flex gap-5">
        <Image src={image} alt="" width={52} height={52} />
        <div className="flex flex-col gap-2">
          <h3> {name}</h3>
          <p> {job} </p>
        </div>
      </div>
    </div>
  );
};

export default TestmonialsCard;
