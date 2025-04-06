import React from "react";
import Details from "./Details";

const Right = () => {
  return (
    <div className="right w-[75%] ">
      <h1 className="text-[3.5rem] font-semibold leading-none">
        Digital Product
        <br />
        Design Services and
        <br />
        Solutions We Offer
      </h1>
      <p className="text-[2.5em] leading-none mt-[1em]">
        We lead your startup at every step of its growth, providing unparalleled
        personal service at every interaction. Whether it's launching an MVP,
        revamping an existing product, securing funding with UI prototypes,
        increasing customer engagement, or boosting conversions, we develop a
        suite of custom-tailored design services to fulfill your expectations.
      </p>
      <Details/>
    </div>
  );
};

export default Right;
