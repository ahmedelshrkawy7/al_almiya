import React from "react";
import Label from "./uicomp/Label";
import TestmonialsCard from "./TestmonialsCard";

const Testimonials = () => {
  return (
    <div className="md:px-40">
      <div>
        <Label head="تقييماتنا" text="اراء عملائنا" />
      </div>

      <div className="grid grid-cols-2 gap-28 mt-20">
        <TestmonialsCard />
        <TestmonialsCard />
      </div>
    </div>
  );
};

export default Testimonials;
