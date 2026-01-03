import React from "react";
import Details from "./Details";

const Right = () => {
  return (
    <div
      className="
        right w-[75%]
        lg:w-full
      "
    >
      <h1
        className="
          font-semibold leading-[1.05]
          text-[3.5rem]
          lg:text-[3rem]
          md:text-[2.4rem]
          sm:text-[1.9rem]
        "
      >
        <span className="block md:text-[2.4rem]">Digital Product</span>
        <span className="block sm:inline md:text-[2.4rem]">Design Services</span>{" "}
        <span className="block sm:inline md:text-[2.4rem]">and Solutions We Offer</span>
      </h1>

      <p
        className="
          mt-[1.5em]
          leading-relaxed
          text-[2.2em]
          lg:text-[1.9em]
          md:hidden
          text-white/85

        "
      >
        We lead your startup at every step of its growth, providing unparalleled
        personal service at every interaction. Whether it's launching an MVP,
        revamping an existing product, securing funding with UI prototypes,
        increasing customer engagement, or boosting conversions, we develop a
        suite of custom-tailored design services to fulfill your expectations.
      </p>

      <div className="mt-[12vh] md:mt-[8vh] sm:mt-[6vh]">
        <Details />
      </div>
    </div>
  );
};

export default Right;
