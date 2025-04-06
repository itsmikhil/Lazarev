import React, { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";
const Box = ({ el }) => {
  let { text, image } = el;
  const imgRef = useRef(null);
  let mouseEnterAnimation=()=>{
    gsap.to(imgRef.current, {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        duration:0.5
      });
  }
  let movingCursorAnimation = (e) => {
    gsap.to(imgRef.current, {
      x: e.clientX - e.currentTarget.getBoundingClientRect().left - 45,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top - 75,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  let mouseLeaveAnimation = () => {
    gsap.to(imgRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <div
    onMouseEnter={mouseEnterAnimation}
      onMouseLeave={mouseLeaveAnimation}
      onMouseMove={movingCursorAnimation}
      className="box w-full flex gap-[5vw] justify-between border-b-[1px] border-[#352d2d] pb-[2.4em] pt-[1em] text-[1.4rem] overflow-hidden"
    >
      <img
        ref={imgRef}
        className="absolute w-[7rem] h-[7rem] rounded-full object-cover object-center scale-[0.7] opacity-[0] pointer-events-none"
        src={image}
        alt=""
      />
      <p className="w-[95%]">{text}</p>
      <MdArrowOutward />
    </div>
  );
};

export default Box;
