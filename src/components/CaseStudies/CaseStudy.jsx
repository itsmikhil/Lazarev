import React, { useRef } from "react";
import gsap from "gsap";

const CaseStudy = ({ el }) => {
  let { title, para, video, image } = el;
  const videoRef = useRef(null);
  const boxRef = useRef(null);

  let videoAnimationHandler = () => {
    gsap.to(videoRef.current, {
      height: "60vh",
      scaleY: 1,
      opacity: 1,
      duration: 0.4,
    });
    gsap.to(boxRef.current, { opacity: 0, duration: 0.2 });
    videoRef.current.play();
  };

  let videoExitAnimationHandler = () => {
    gsap.to(videoRef.current, {
      height: "38vh",
      opacity: 0,
      duration: 0.4,
    });
    gsap.to(boxRef.current, { opacity: 1, delay: 0.35, duration: 0.12 });
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      onMouseEnter={videoAnimationHandler}
      onMouseLeave={videoExitAnimationHandler}
      className="
        case-study flex flex-col
        gap-[3em]
        min-h-[40vh]
      "
    >
      <h1
        className="
          font-semibold
          text-[2rem]
          w-[80%]
          md:w-full
          md:text-[1.6rem]
          sm:text-[1.3rem]
        "
      >
        {title}
      </h1>

      <div
        className="
          contain relative flex flex-col justify-between
          h-[60vh]
          md:h-auto md:gap-[2em]
        "
      >
        <p className="text-[1.2rem] md:text-[1rem] text-[#989898]">
          {para}
        </p>

        <img
          ref={boxRef}
          className="
            w-full h-[40vh]
            md:h-[28vh]
            object-cover
          "
          src={image}
          alt=""
        />

        <video
          ref={videoRef}
          muted
          autoPlay
          className="
            absolute bottom-0 w-full
            h-[40vh]
            md:hidden
            object-cover opacity-0
          "
          src={video}
        />
      </div>
    </div>
  );
};

export default CaseStudy;
