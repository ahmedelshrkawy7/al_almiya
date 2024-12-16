import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-[var(--textColor)] p-7 rounded-3xl mt-7 text-white">
      {text}
    </button>
  );
};

export default Button;
