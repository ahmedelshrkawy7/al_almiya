"use client";
import React, { useState } from "react";
import Label from "./uicomp/Label";
import TestmonialsCard from "./TestmonialsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Testimonials = ({ data }) => {
  console.log("🚀 ~ Testimonials ~ data:", data);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    document.querySelector(`#carousel-item-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className="md:px-40">
      <div>
        <Label head="تقييماتنا" text="اراء عملائنا" />
      </div>

      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          onScroll={(e) => {
            const currentIndex = Math.round(
              (e.target as HTMLElement).scrollLeft /
                (e.target as HTMLElement).clientWidth
            );
            setActiveIndex(currentIndex);
          }}
        >
          <CarouselContent>
            {data?.map((el, index) => (
              <CarouselItem
                key={index}
                className=" lg:basis-1/3"
                id={`carousel-item-${index}`}
              >
                <TestmonialsCard {...el} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {data?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full ${
                activeIndex === index
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
