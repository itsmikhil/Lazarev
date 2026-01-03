import React from "react";
import { MdModeEdit } from "react-icons/md";

const IntroText = () => {
  return (
    <div className="intro-text flex flex-col justify-center items-center gap-[2vh]">
      <span className="overflow-hidden inline-block">
        <h1 className="text-[9vw] text-center font-extrabold leading-none tracking-tighter xl:text-[8vw] lg:text-[5vw] md:text-[10vw] ">
          AI & ML PR
          <div className="favicon bg-[#0BA34E] rounded-full inline-block text-[2.1vw] p-[2.2vw]">
            <MdModeEdit />
          </div>
          DUCT DESIGN AGENCY
        </h1>
      </span>
        <p className="w-[35%] text-center text-[1.2vw] leading-none xl:text-[1.5vw] lg:w-[60%] md:w-[75%] ">
          <span className="lg:text-sm">
            We partner with AI & ML businesses, guiding them from series A to
            series and beyond with our expertise in
          </span>
           <br />
        </p>
        <p className="w-[37%] text-center text-[1.2vw] leading-none md:flex md:flex-col md:w-fit lg:text-sm">
          <span className="border-[1px] rounded-full px-[0.9vw] py-[0.8vh] border-white">
            brand design
          </span>{" "}
          <span className="border-[1px] rounded-full px-[0.9vw] py-[0.8vh] border-white">
            user experience
          </span>
          and
          <span className="border-[1px] rounded-full px-[0.9vw] py-[0.8vh] border-white">
            digital product design
          </span>
        </p>
    </div>
  );
};

export default IntroText;
