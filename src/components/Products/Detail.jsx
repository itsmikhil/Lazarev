import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";

const Detail = ({ el }) => {
  let { para, title } = el;

  const detailOverlayRef = useRef(null);

  let MouseEnterAnimation = () => {
    gsap.to(detailOverlayRef.current, {
      top:"0",
      duration:0.5,
      ease:"sine.out"
    });
  };
  let MouseLeaveAnimation = () => {
    gsap.to(detailOverlayRef.current, {
      top:"-100%",
      duration:0.5,
      ease:"sine.out"
    });
  };

  return (
    <div
      onMouseEnter={MouseEnterAnimation}
      onMouseLeave={MouseLeaveAnimation}
      className="detail relative flex border-t-[1px] border-[#2c2828] justify-between pb-[3em] bg-transparent z-[2] overflow-hidden "
    >
      <div ref={detailOverlayRef} className="overlay absolute w-full h-full -top-[100%] bg-[#1f1f1f] z-[1]" ></div>
      <h1 className="text-[2rem] z-[2]">{title}</h1>
      <p className="w-[60%] z-[2]">{para}</p>
      <div className="icon z-[2]">
        <GoArrowUpRight />
      </div>
    </div>
  );
};

export default Detail;
