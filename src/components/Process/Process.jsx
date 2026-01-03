import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";

const Process = () => {
  // diagonal Animation
  useGSAP(() => {
    gsap.from(".step", {
      x: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".section-bottom",
        // markers: true,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 2,
      },
    });
  }, []);

  //   button Animation

  useEffect(() => {
    gsap.set(".h1bottom_1 span", { opacity: 0 }); // Ensures opacity is set by GSAP
  }, []);
  let buttonAnimation = () => {
    gsap.to(".h1top_1 span", {
      y: -25,
      stagger: 0.02,
      duration: 0.2,
      opacity: 0,
      ease: "power1.out",
    });
    gsap.to(".h1bottom_1 span", {
      y: -25,
      stagger: 0.02,
      duration: 0.2,
      opacity: 1,
      ease: "power1.out",
    });
  };
  let buttonExitAnimation = () => {
    gsap.to(".h1top_1 span", {
      y: 0,
      stagger: 0.02,
      duration: 0.2,
      opacity: 1,
      ease: "power1.out",
    });
    gsap.to(".h1bottom_1 span", {
      y: 0,
      stagger: 0.02,
      duration: 0.2,
      opacity: 0,
      ease: "power1.out",
    });
  };

  return (
    <div className="process bg-white text-black pb-[1em] mt-[10vh]">
      <div className="top w-full flex justify-center">
        <h1 className="text-[5rem] font-semibold leading-[1.25em] pl-[4.4em] lg:pl-[0em] md:text-[3rem]">
          Digital Product
          <br />
          Design Process
        </h1>
      </div>
      <div className="bottom flex-col">
        <div className="section flex justify-between gap-[2em] px-[9em] lg:flex-col lg:justify-center lg:items-center lg:pointer-events-none lg:px-[1em] lg:mt-[1rem] ">
          <button
            onMouseEnter={buttonAnimation}
            onMouseLeave={buttonExitAnimation}
            className="uppercase flex justify-center border-[1px] rounded-full bg-[#4F5BFF] text-white font-semibold h-fit w-[25%] lg:p-[0.75em] pr-[0.5em]  py-[1em] lg:w-auto"
          >
            <div className="div flex-col h-[4vh] w-fit inline-block ">
              <h1 className="h1top_1 inline-block w-fit font-semibold tracking-tighter xl:text-[0.8rem] lg:text-[0.5rem] ">
                <span className="inline-block">S</span>
                <span className="inline-block">E</span>
                <span className="inline-block">E</span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block">A</span>
                <span className="inline-block">L</span>
                <span className="inline-block">L</span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block">O</span>
                <span className="inline-block">T</span>
                <span className="inline-block">H</span>
                <span className="inline-block">E</span>
                <span className="inline-block">R</span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block">C</span>
                <span className="inline-block">A</span>
                <span className="inline-block">S</span>
                <span className="inline-block">E</span>
                <span className="inline-block">S</span>
                <span className="inline-block">T</span>
                <span className="inline-block">U</span>
                <span className="inline-block">D</span>
                <span className="inline-block">I</span>
                <span className="inline-block">E</span>
                <span className="inline-block">S</span>
              </h1>
              <h1 className="h1bottom_1 inline-block w-fit font-semibold tracking-tighter xl:text-[0.8rem] lg:hidden ">
                <span className="inline-block">S</span>
                <span className="inline-block">E</span>
                <span className="inline-block">E</span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block">A</span>
                <span className="inline-block">L</span>
                <span className="inline-block">L</span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block">O</span>
                <span className="inline-block">T</span>
                <span className="inline-block">H</span>
                <span className="inline-block">E</span>
                <span className="inline-block">R</span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block">C</span>
                <span className="inline-block">A</span>
                <span className="inline-block">S</span>
                <span className="inline-block">E</span>
                <span className="inline-block">S</span>
                <span className="inline-block">T</span>
                <span className="inline-block">U</span>
                <span className="inline-block">D</span>
                <span className="inline-block">I</span>
                <span className="inline-block">E</span>
                <span className="inline-block">S</span>
              </h1>
            </div>
            <div className="scale-[1.3] xl:scale-[1]">
              <GoArrowUpRight />
            </div>
          </button>
          <div className="w-[60%] text-[1.5rem] lg:w-[90%] lg:text-center lg:items-center md:text-[1rem]">
            <p>
              We do not take on projects that involve blind conformity or
              designing out of context. We won't settle for a user interface
              design that is misaligned with your product and digital strategy.
              Neither will we launch web development ventures without user
              testing to validate our design solutions.
            </p>
            <p>
              Instead, we create scalable digital products that meet the
              ever-evolving demands of our customers, ensuring long-term
              sustainability.
            </p>
          </div>
        </div>
        <div className="section-bottom flex justify-center min-h-[44vh] mt-[5vh] lg:hidden">
          <div className="steps pl-[0.2em] pt-[0.2em] border-[#daddda] h-full border-t-[1px] w-[40%] "></div>
          <div className="steps pl-[0.2em] pt-[0.2em] border-[#daddda] h-full border-t-[1px] w-[50%] border-l-[1px] flex flex-col gap-[0.2em]">
            <p>Product Strategy</p>
            <div className="step xl:text-[0.8rem] text-[1rem] w-[90%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                1
              </p>
              <h3 className="font-semibold">Strategy Workshops</h3>
            </div>
            <div className="step xl:text-[0.8rem] text-[1rem] w-[90%] translate-x-[10%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                2
              </p>
              <h3 className="font-semibold">Idea Validation</h3>
            </div>
            <div className="step xl:text-[0.8rem] text-[1rem] w-[90%] translate-x-[20%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                3
              </p>
              <h3 className="font-semibold">Market Research</h3>
            </div>
            <div className="step xl:text-[0.8rem] text-[1rem] w-[90%] translate-x-[30%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                4
              </p>
              <h3 className="font-semibold">Product Positionin</h3>
            </div>
            <div className="step xl:text-[0.8rem] text-[1rem] w-[90%] translate-x-[40%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                5
              </p>
              <h3 className="font-semibold">UX Research</h3>
            </div>
            <div className="step xl:text-[0.8rem]  text-[1rem] w-[90%] translate-x-[50%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                6
              </p>
              <h3 className="font-semibold">Functional Decomposition</h3>
            </div>
          </div>
          <div className="steps pl-[0.2em] pt-[0.2em] border-[#daddda] h-full border-t-[1px] w-[45%] border-l-[1px] flex flex-col gap-[0.2em]">
            <p>UX Design</p>
            <div className="step xl:text-[0.8rem] text-[1rem] w-[80%] translate-x-[0%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                7
              </p>
              <h3 className="font-semibold">User Flows</h3>
            </div>
            <div className="step xl:text-[0.8rem] text-[1rem] w-[80%] translate-x-[10%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                8
              </p>
              <h3 className="font-semibold">Prototyping</h3>
            </div>
          </div>
          <div className="steps pl-[0.2em] pt-[0.2em] border-[#daddda] h-full border-t-[1px] w-[55%] border-l-[1px] flex flex-col gap-[0.2em]">
            <p>UI Design</p>
            <div className="step xl:text-[0.8rem] w-[80%] translate-x-[0%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                9
              </p>
              <h3 className="font-semibold">MoodBoards</h3>
            </div>
            <div className="step xl:text-[0.8rem] w-[80%] translate-x-[10%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                10
              </p>
              <h3 className="font-semibold">Visual Design</h3>
            </div>
            <div className="step xl:text-[0.8rem] w-[80%] translate-x-[20%] bg-[#111111]  text-white inline-flex rounded-full justify-start px-[1em] py-[0.5em] gap-[0.5em]">
              <p className="bg-[#333333] rounded-full inline-block px-[0.5em]">
                11
              </p>
              <h3 className="font-semibold">Hand-off</h3>
            </div>
          </div>
          <div className="steps pl-[0.2em] pt-[0.2em] border-[#daddda] h-full border-t-[1px] w-[50%] border-l-[1px]">
            Delivery
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
