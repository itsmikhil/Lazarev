import React from "react";
import IntroText from "./IntroText";
import Scroller from "./Scroller";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LandingPage = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".landing-page", {
      scaleX: 0.5,
      scaleY: 0,
      opacity: 0,
      duration: 1,
      borderRadius: "50%",
    });
    tl.from(".intro-text h1", { y: 80, opacity: 0, duration: 0.6 });
    tl.from(".intro-text p, .intro-text div", {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#111111]">
      <div
        className="
          landing-page relative flex flex-col
          items-center justify-center
          min-h-screen
        "
      >
        <IntroText />
        <Scroller />
      </div>
    </div>
  );
};

export default LandingPage;
