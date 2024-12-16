import React from "react";
import Advantages from "@/components/Advantages";
import Application from "@/components/Application";
import Header from "@/components/Header";
import Leaking from "@/components/Leaking";
import OurServices from "@/components/OurServices";
import Professionals from "@/components/Professionals";
import Testimonials from "@/components/Testimonials";
import WhoAreWe from "@/components/WhoAreWe";

const Website_home = () => {
  return (
    <div>
      <Header />
      <OurServices />
      <WhoAreWe />
      <Leaking />
      <Professionals />
      <Testimonials />
      <Advantages />
      <Application />
    </div>
  );
};

export default Website_home;