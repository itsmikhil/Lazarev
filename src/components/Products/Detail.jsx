import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";

const Detail = ({ el }) => {
  let { para, title } = el;
  const detailOverlayRef = useRef(null);

  let MouseEnterAnimation = () => {
    gsap.to(detailOverlayRef.current, { top: "0", duration: 0.5 });
  };

  let MouseLeaveAnimation = () => {
    gsap.to(detailOverlayRef.current, { top: "-100%", duration: 0.5 });
  };

  return (
    <div
      onMouseEnter={MouseEnterAnimation}
      onMouseLeave={MouseLeaveAnimation}
      className="
        detail relative flex justify-between
        border-t-[1px] border-[#2c2828]
        pb-[3em] overflow-hidden
        md:flex-col md:gap-[1em]
      "
    >
      <div
        ref={detailOverlayRef}
        className="overlay absolute w-full h-full -top-[100%] bg-[#1f1f1f]"
      ></div>

      <h1 className="text-[2rem] md:text-[1.5rem] z-[2]">{title}</h1>
      <p className="w-[60%] md:w-full z-[2]">{para}</p>
      <div className="icon z-[2]">
        <GoArrowUpRight />
      </div>
    </div>
  );
};

export default Detail;
