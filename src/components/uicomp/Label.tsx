import React from "react";

const Label = ({ head, text }: { head: string; text: string }) => {
  return (
    <div className="flex flex-col gap-8 items-start">
      <span className="bg-[#F7F7FC] rounded-[50px] p-5 text-center text-[var(--textColor)]">
        {head}
      </span>
      <h2 className="text-[40px] font-semibold text-black">{text}</h2>
    </div>
  );
};

export default Label;
