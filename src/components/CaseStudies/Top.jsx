import React from "react";

const Top = () => {
  return (
    <div className="top flex flex-col gap-[2.2em]">
      <h1
        className="
          font-bold leading-none
          text-[4rem]
          lg:text-[3.2rem]
          md:text-[2.5rem]
          sm:text-[2rem]
        "
      >
        Featured digital
        <br />
        design projects
      </h1>

      <p
        className="
          text-[1.4rem]
          w-[55%]
          lg:w-[70%]
          md:w-full
          md:text-[1.15rem]
          sm:text-[1rem]
          text-white/80
        "
      >
        Our portfolio encompasses a wide range of digital designs essential for
        the growth of modern businesses. From B2B SaaS and B2C mobile apps to
        marketing design for promotions, we display our work created for
        early-stage startups and enterprises at various stages of their growth.
      </p>
    </div>
  );
};

export default Top;
