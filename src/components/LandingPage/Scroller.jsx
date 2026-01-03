import React from "react";
import logo1 from "../../assets/logo-1.svg";
import logo2 from "../../assets/logo-2.svg";
import logo3 from "../../assets/logo-3.svg";
import logo4 from "../../assets/logo-4.svg";
import logo5 from "../../assets/logo-5.svg";
import logo6 from "../../assets/logo-6.svg";

const Scroller = () => {
  return (
    <div className="scroller absolute bottom-[6vh] w-[40%] overflow-hidden animate-[scroll] md:w-[70%]">
      <div className="scroller-wrapper flex whitespace-nowrap relative">
        <div className="blur-left absolute h-full w-[12vw] top-0 -left-3 bg-gradient-to-r from-[#111111] to-transparent z-[2] md:w-[25vw]"></div>
        <div className="scroller-container flex gap-[3vw]">
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo1} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo2} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo3} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo4} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo5} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo6} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo1} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo2} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo3} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo4} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo5} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo6} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo1} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo2} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo3} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo4} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo5} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo6} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo1} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo2} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo3} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo4} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo5} alt="" />
          <img className="w-[4vw] h-[5vh] md:w-[8vw] md:h-[7vh]" src={logo6} alt="" />
        </div>
        <div className="blur-right absolute h-full w-[12vw] top-0 right-0 bg-gradient-to-l from-[#111111] to-transparent z-[2] md:w-[25vw] "></div>
      </div>
    </div>
  );
};

export default Scroller;
