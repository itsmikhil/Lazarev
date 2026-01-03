import React from "react";
import ringImage from "../../assets/ring.webp";
import starImage from "../../assets/star.webp";

const Premium = () => {
  return (
    <div
      data-lenis-speed="0.5"
      className="
        premium relative min-h-screen w-full
        bg-[linear-gradient(312deg,#342F6C_0%,#4F5BFF_0.01%,#0B0E40_99.16%)]
        overflow-hidden
        mt-[10vh] lg:mt-[8vh] md:mt-[6vh] sm:mt-[4vh]
      "
    >
      {/* Background stars */}
      <img
        className="
          absolute inset-0 h-full w-full
          object-cover object-center
          opacity-80
        "
        src={starImage}
        alt=""
      />

      {/* Ring decoration */}
      <img
        className="
          absolute -left-[5vw] -top-[7vh]
          h-[60vh] w-[20vw]
          opacity-60 object-cover object-center
          lg:h-[45vh] lg:w-[30vw]
          md:h-[35vh] md:w-[40vw]
          sm:h-[28vh] sm:w-[55vw]
        "
        src={ringImage}
        alt=""
      />

      {/* Content */}
      <div
        className="
          content relative z-10
          min-h-screen w-full
          flex flex-col items-center justify-center
          gap-8 lg:gap-6 md:gap-5 sm:gap-4
          px-10 lg:px-8 md:px-6 sm:px-4
          text-center
        "
      >
        <h1
          className="
            uppercase font-bold leading-tight
            text-[5rem]
            lg:text-[4rem]
            md:text-[3rem]
            sm:text-[2.2rem]
          "
        >
          Golden Standard in UX + AI
        </h1>

        <p
          className="
            text-[2.5rem]
            lg:text-[2rem]
            md:text-[1.5rem]
            sm:text-[1.1rem]
            max-w-5xl
            text-white/90
          "
        >
          Look, we've been designing AI experiences since 2017, and we're not
          just dabbling in it
        </p>

        <p
          className="
            text-[1.4rem]
            lg:text-[1.2rem]
            md:text-[1rem]
            sm:text-[0.95rem]
            text-white/80
          "
        >
          Want to see how we do it?
        </p>
      </div>
    </div>
  );
};

export default Premium;
