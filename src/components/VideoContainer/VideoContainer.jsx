import React, { useRef } from "react";
import thumbnail from "../../assets/reel-cover.webp";
import { IoIosPlay } from "react-icons/io";
import reel from "../../assets/video.mp4";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const VideoContainer = () => {
  let hoverAnimationHandler = () => {
    gsap.to(".play-container h1 ", {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: "sine.out",
    });
  };

  let hoverAnimationExit = () => {
    gsap.to(".play-container h1 ", {
      x: -30,
      opacity: 0,
      duration: 0.2,
      ease: "sine.in",
    });
  };
  const videoRef = useRef(null);
  let clickAnimationHnadler = () => {
    videoRef.current.play()
    gsap.to(videoRef.current, {
      display: "block",
      scale: 1,
      duration:0.4
    });
  };
  const videoExitHandler=()=>{
    videoRef.current.load()
    gsap.to(videoRef.current,{
      display:"none",
      scaleX:0.7,
      scaleY:0.1,
      duration:0.4
    })
  }
  return (
    <div className="video-container relative h-[90vh] w-full overflow-hidden flex items-center justify-center z-[1] ">
      <img
        className="object-cover absolute object-center w-full h-full z-[0]"
        src={thumbnail}
        alt=""
      />
      <div className="play-container flex flex-col items-center gap-[1vh] z-[1]">
        <div
          onMouseEnter={hoverAnimationHandler}
          onMouseLeave={hoverAnimationExit}
          onClick={clickAnimationHnadler}
          className="play text-black bg-white rounded-full text-[3rem] p-[1em] cursor-pointer"
        >
          <IoIosPlay />
        </div>
        <h1 className=" -translate-x-[30px] bg-white text-black text-[1rem] px-[1.5em] py-[0.5em] rounded-full opacity-0 pointer-events-none">
          Show Reel
        </h1>
      </div>
      <video
      onClick={videoExitHandler}
        ref={videoRef}
        className="absolute scale-x-[0.7] scale-y-[0.1] top-0 left-0 inset-0 m-auto hidden z-[2] "
        src={reel}
      ></video>
    </div>
  );
};

export default VideoContainer;
