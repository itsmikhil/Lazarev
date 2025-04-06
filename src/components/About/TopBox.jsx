  import React, { useRef } from "react";
  import { gsap } from "gsap";
  import bgVideo1 from "../../assets/background-video-1.webm";
  import bgVideo2 from "../../assets/background-video-2.webm";
  import bgVideo3 from "../../assets/background-video-3.webm";
  import { useGSAP } from "@gsap/react";

  const TopBox = ({ el }) => {
    let { topnum, num, para, video } = el;
    const videoRef = useRef(null);

    let animationHandler1 = () => {
      gsap.to(videoRef.current, {
        opacity: 1,
        ease: "sine.out",
        duration: 1,
      });
      videoRef.current.play();
    };

    let animationHandler2 = () => {
      gsap.to(videoRef.current, {
        opacity: 0,
        ease: "power2.out",
        duration: 1.5,
      });
      videoRef.current.load();
      videoRef.current.currentTime = 0;
    };

    return (
      <div
        onMouseEnter={animationHandler1}
        onMouseLeave={animationHandler2}
        className="topbox bg-[#1F1F1F] w-[33%] min-h-[55vh] overflow-hidden p-[2rem] relative z-[1] rounded-[1rem]"
      >
        <video
          ref={videoRef}
          src={video}
          muted
          className="absolute top-0 left-0 w-full h-full z-[2] object-cover object-center opacity-[0] pointer-events-none"
        ></video>
        <div className="content flex flex-col w-full h-full justify-between relative z-[3]">
          <div className="top-content">
            <p className="text-[#505050] text-[0.8rem] font-semibold">{topnum}</p>
          </div>
          <div className="bottom-content flex flex-col">
            <h1 className="font-bold text-[3.7rem]">{num}</h1>
            <p className="w-[50%] text-[1.2rem] text-[#999999]">{para}</p>
          </div>
        </div>
      </div>
    );
  };

  export default TopBox;
