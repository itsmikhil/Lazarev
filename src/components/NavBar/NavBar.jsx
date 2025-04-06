import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import NavOption from "./NavOption";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  useGSAP(()=>{
    gsap.to(".nav-bar", {
      paddingTop: "0.5em",
      scrollTrigger: {
        trigger: ".nav-bar",
        start: "top -7%",
        end: "bottom 12%",
        scrub: 2,
        scroller: "body",
      },
    });
  },[])
  

  let data = [
    { main: "CASE STUDIES", bottom: ["Case Studies"] },
    {
      main: "Area of expertise",
      bottom: [
        "AI & ML",
        "Fintech",
        "Real estate",
        "fintech",
        "E-commerce",
        "Web-3",
      ],
    },
    {
      main: "UI UX Design",
      bottom: ["Real estate", "fintech", "E-commerce", "Web-3"],
    },
    {
      main: "product design",
      bottom: ["Real estate", "fintech", "E-commerce", "Web-3"],
    },
    {
      main: "design process",
      bottom: ["E-commerce", "Web-3"],
    },
    {
      main: "About agency",
      bottom: ["fintech", "E-commerce", "Web-3"],
    },
  ];

  let NavBarAnimation = () => {
    let tl = gsap.timeline();
    tl.to(".nav-bar .bottom", {
      height: "20vh",
      duration: 0.1,
      ease: "power1.inOut",
    });

    tl.to(".nav-bar .container .nav-options .nav-option .bottom", {
      display: "block",
      duration: 0.1,
      ease: "elastic",
    });
    tl.from(".nav-bar .container .nav-options .nav-option .bottom span h3", {
      y: 20,
      opacity: 0,
      stagger: 0.04,
      duration: 0.2,
      ease: "power1.inOut",
    });
  };
  let NavBarAnimationExit = () => {
    gsap.to(".nav-bar .container .nav-options .nav-option .bottom", {
      display: "none",
      duration: 0.2,
    });
  };

  return (
    <div
      onMouseEnter={NavBarAnimation}
      onMouseLeave={NavBarAnimationExit}
      className="nav-bar fixed top-0 left-0  min-w-full px-[5em] pt-[2em] bg-[#111111] z-[99]  xl:pointer-events-none  "
    >
      <div className="container w-full flex justify-between items-start border-b-[1px] border-white xl:border-0 ">
        <h1 className="font-extrabold text-[1.5rem] leading-none">LAZAREV.</h1>
        <div className="nav-options flex gap-[1.5em] xl:hidden">
          {data.map((el, idx) => {
            return <NavOption el={el} key={idx} />;
          })}
        </div>
        <button className="bg-[#0BA34E] rounded-full text-[1.2rem] inline-flex px-[1.3em] py-[0.8em] justify-center items-center gap-[1em] ">
          <p className="text-[0.9rem] font-semibold">Let's Talk</p>
          <MdModeEditOutline />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
