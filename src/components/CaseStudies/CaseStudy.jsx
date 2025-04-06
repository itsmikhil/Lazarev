import React, { useReducer, useRef } from "react";
import gsap from "gsap";

const CaseStudy = ({ el }) => {
  let { title, para, video, image } = el;
  const videoRef = useRef(null);
  const boxRef = useRef(null);

  let videoAnimationHandler = () => {
    gsap.to(videoRef.current, {
      height: "60vh",
      transformOrigin: "bottom",
      scaleY: "1",
      opacity: 1,
      duration: 0.4,
      ease: "power1.in",
    });
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power1.in",
    });
    videoRef.current.play();
  };
  let videoExitAnimationHandler = () => {
    let tl = gsap.timeline();
    tl.to(videoRef.current, {
      transformOrigin: "top",
      height: "38vh",
      opacity: 0,
      duration: 0.4,
      ease: "power1.in",
    });
        // tl.to(videoRef.current, {
        
        //   duration: 0.3,
        //   ease: "power1.out",
        // });

    gsap.to(boxRef.current, {
      opacity: 1,
      duration: 0.12,
      delay: 0.35,
      ease: "power1.in",
    });

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      onMouseEnter={videoAnimationHandler}
      onMouseLeave={videoExitAnimationHandler}
      className="case-study flex flex-col gap-[4em] min-h-[40vh]"
    >
      <h1 className="text-[2rem] font-semibold w-[80%]">{title}</h1>
      <div className="contain relative h-[60vh] flex flex-col gap-[5vh] justify-between overflow-hidden">
        <p className="text-[1.2rem]  text-[#989898]">{para}</p>
        <img
          ref={boxRef}
          className="w-full h-[40vh] object-cover object-center"
          src={image}
          alt=""
        />
        <video
          ref={videoRef}
          muted
          autoPlay
          className=" h-[40vh] absolute w-full bottom-0  object-cover opacity-[0]"
          src={video}
        ></video>
      </div>
    </div>
  );
};

export default CaseStudy;
