import React from "react";

const Left = () => {
  return (
    <div
      className="
        left flex flex-col justify-between
        w-[40%] h-full
        gap-[30vh]
        lg:w-full lg:gap-[6vh]
        md:gap-[4vh]
        sm:gap-[3vh]
      "
    >
      <p className="text-[1.2rem] md:text-[1.05rem] sm:text-[0.95rem]">
        Exclusive insights into UI/UX and product
      </p>

      <p
        className="
          w-[75%]
          lg:w-full
          text-[1.4rem]
          md:text-[1.15rem]
          sm:text-[1rem]
          leading-relaxed
        "
      >
        Being a design studio at the forefront of digital transformation and
        product design, we take it upon ourselves to drop some knowledge, share
        insights, let out insider tips, and put our work on full display
      </p>
    </div>
  );
};

export default Left;
