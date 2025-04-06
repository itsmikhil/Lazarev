import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
const Left = () => {

  // When i was setting h1bottoms's opacity zero by taiwlind then GSAP was not able to override it 
  // therfore i had to set its opcaity by gsap.set()
  
  useEffect(() => {
    gsap.set(".h1bottom span", { opacity: 0 }); // Ensures opacity is set by GSAP
  }, []);
  let buttonAnimation = () => {
    gsap.to(".h1top span", {
      y: -25,
      stagger: 0.02,
      duration: 0.2,
      opacity: 0,
      ease: "power1.out",
    });
    gsap.to(".h1bottom span", {
      y: -25,
      stagger: 0.02,
      duration: 0.2,
      opacity: 1,
      ease: "power1.out",
    });
  };
  let buttonExitAnimation = () => {
    gsap.to(".h1top span", {
      y: 0,
      stagger: 0.02,
      duration: 0.2,
      opacity: 1,
      ease: "power1.out",
    });
    gsap.to(".h1bottom span", {
      y: 0,
      stagger: 0.02,
      duration: 0.2,
      opacity: 0,
      ease: "power1.out",
    });
  };
  return (
    <div className="left w-[20%] items-start  flex justify-center ">
      <button
        onMouseEnter={buttonAnimation}
        onMouseLeave={buttonExitAnimation}
        className="text-center  items-start justify-center uppercase sticky top-[10%] bg-green-700 text-[0.9rem] flex gap-[1em]  pt-[1em]  pb-[0.5em] px-[3em] rounded-full overflow-hidden xl:px-[2em]"
      >
        <div className="div flex-col h-[4vh] ">
          <h1 className="h1top inline-block font-semibold xl:text-[0.8rem]">
            <span className="inline-block">B</span>
            <span className="inline-block">e</span>
            <span className="inline-block">c</span>
            <span className="inline-block">o</span>
            <span className="inline-block">m</span>
            <span className="inline-block">e</span>
            <span className="inline-block"> </span> {/* Space */}
            <span className="inline-block">a</span>
            <span className="inline-block"> </span> {/* Space */}
            <span className="inline-block">C</span>
            <span className="inline-block">l</span>
            <span className="inline-block">i</span>
            <span className="inline-block">e</span>
            <span className="inline-block">n</span>
            <span className="inline-block">t</span>
          </h1>
          <h1 className="h1bottom inline-block font-semibold xl:text-[0.8rem]">
            <span className="inline-block">B</span>
            <span className="inline-block">e</span>
            <span className="inline-block">c</span>
            <span className="inline-block">o</span>
            <span className="inline-block">m</span>
            <span className="inline-block">e</span>
            <span className="inline-block"> </span> {/* Space */}
            <span className="inline-block">a</span>
            <span className="inline-block"> </span> {/* Space */}
            <span className="inline-block">C</span>
            <span className="inline-block">l</span>
            <span className="inline-block">i</span>
            <span className="inline-block">e</span>
            <span className="inline-block">n</span>
            <span className="inline-block">t</span>
          </h1>
        </div>
        <div className="scale-[1.3] xl:scale-[1]">
          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default Left;
