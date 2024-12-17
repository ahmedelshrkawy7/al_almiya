"use client";

import Advantages from "@/components/Advantages";
import Application from "@/components/Application";
import Header from "@/components/Header";
import Leaking from "@/components/Leaking";
import OurServices from "@/components/OurServices";
import Professionals from "@/components/Professionals";
import Testimonials from "@/components/Testimonials";
import WhoAreWe from "@/components/WhoAreWe";
import { useMyContext } from "@/context/DataContext";

// /src/pages/website_home.tsx

const Website_home = () => {
  const { data } = useMyContext();
  console.log("🚀 ~ data:", data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header data={data.home_slider} />
      <OurServices data={data.services} />
      <WhoAreWe data={data.home_about} services={data.services} />
      <Leaking data={data.home_services} />
      <Professionals data={data.home_experts} />
      <Testimonials data={data.testimonials} />
      <Advantages data={data.what_we_offers} />
      <Application data={data.home_slider} />
    </>
  );
};

export default Website_home;
