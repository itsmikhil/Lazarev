import React from "react";
import IntroText from "./IntroText";
import Scroller from "./Scroller";
import NavBar from "./../NavBar/NavBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LandingPage = () => {
  
  useGSAP(() => {
    let tl=gsap.timeline();
    tl.from(".landing-page", {
      scaleX: 0.5,
      scaleY: 0,
      duration: 1,
      opacity: 0,
      translateX:-30,
      borderRadius:"50%"
    });
    tl.from(".nav-bar",{
      opacity:0,
      duration:0.1
    })
    tl.from(".intro-text h1",{
      y:100,
      duration:0.7,
      opacity:0,
      // scale:0
    })
    tl.from(".intro-text p",{
      duration:0.7,
      opacity:0,

      scale:0
    })
  }, []);
  return (
    <div className="container relative min-h-screen bg-white max-w-screen ">
      <div className="landing-page relative flex flex-col justify-center items-center min-h-[100vh] z-[1]  bg-[#111111] w-full">
        {/* <NavBar /> */}
        <IntroText />
        <Scroller />
      </div>
    </div>
  );
};

export default LandingPage;
