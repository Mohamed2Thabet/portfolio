import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
         Kind words from{" "}
        <span className="text-purple-500">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col antialiased overflow-hidden items-center rounded-md relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default Testimonials;
