import React, { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";

const Box = ({ el }) => {
  let { text, image } = el;
  const imgRef = useRef(null);

  let mouseEnterAnimation = () => {
    gsap.to(imgRef.current, { scale: 1, opacity: 1, duration: 0.5 });
  };

  let movingCursorAnimation = (e) => {
    gsap.to(imgRef.current, {
      x: e.clientX - e.currentTarget.getBoundingClientRect().left - 45,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top - 75,
      duration: 0.3,
    });
  };

  let mouseLeaveAnimation = () => {
    gsap.to(imgRef.current, { scale: 0.7, opacity: 0, duration: 0.5 });
  };

  return (
    <div
      onMouseEnter={mouseEnterAnimation}
      onMouseLeave={mouseLeaveAnimation}
      onMouseMove={movingCursorAnimation}
      className="
        box relative w-full flex justify-between
        border-b-[1px] border-[#352d2d]
        pt-[1em] pb-[2.4em]
        text-[1.4rem]
        md:text-[1.15rem]
        sm:text-[1rem]
        gap-[5vw]
      "
    >
      <img
        ref={imgRef}
        className="
          absolute w-[7rem] h-[7rem] rounded-full
          object-cover scale-[0.7] opacity-0 pointer-events-none
          md:hidden
        "
        src={image}
        alt=""
      />
      <p className="w-[90%]">{text}</p>
      <MdArrowOutward />
    </div>
  );
};

export default Box;
