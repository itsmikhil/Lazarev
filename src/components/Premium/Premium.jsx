import React from "react";
import ringImage from "../../assets/ring.webp";
import starImage from "../../assets/star.webp";
const Premium = () => {
  return (
    <div data-lenis-speed="0.5"  className="premium relative h-[105vh] w-full bg-[linear-gradient(312deg,#342F6C_0%,#4F5BFF_0.01%,#0B0E40_99.16%)] overflow-hidden mt-[10vh]">

          <img 
            className="absolute h-full w-full object-cover object-center opacity-[0.8] "
            src={starImage}
            alt=""
          />

      <img
        className="absolute -left-[5vw] -top-[7vh] h-[60vh] w-[20vw] opacity-[0.6] object-cover object-center "
        src={ringImage}
        alt=""
      />
      <div  className="content relative h-full w-full flex flex-col justify-center items-center gap-[2em] z-[2]">
        <h1 className="uppercase text-[5rem] font-bold leading-none ">
          Golden Standard in UX + AI
        </h1>
        <p className="text-[2.5rem] text-center w-[90%]">
          Look, we've been designing AI experiences since 2017, and we're not
          just dabbling in it
        </p>
        <p className="text-[1.4rem]">Want to see how we do it?</p>
      </div>
    </div>
  );
};

export default Premium;
