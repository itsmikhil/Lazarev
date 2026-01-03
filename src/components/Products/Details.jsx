import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import Detail from "./Detail";
import { gsap } from "gsap";

const Details = () => {
  let data = [
    {
      title: "Creative Studio",
      para: "Your startup needs a fresh identity that attracts and engages. Ready? Work with our design team to leave a strong impact.",
    },
    {
      title: "Digital Experts",
      para: "We craft powerful visuals that inspire and influence. Let's innovate and shape a distinct personality for your audience.",
    },
    {
      title: "Strategic Minds",
      para: "Elevate your presence with a stunning brand image. Collaborate with us to bring your vision to life in a unique way.",
    },
  ];

  const [click, setclick] = useState(false);

  let rotateAnimation = () => {
    let prevState = click;
    setclick(!click);
    gsap.to(".details .icon", { rotate: prevState ? "0deg" : "180deg", duration: 0.1 });
  };

  return (
    <div
      onClick={rotateAnimation}
      className="
        details mt-[20vh] border-t-[1px] border-white
        lg:mt-[12vh]
        md:mt-[8vh]
      "
    >
      <details open>
        <summary>
          <div className="flex items-center justify-between">
            <h1 className="text-[3rem] md:text-[2rem] sm:text-[1.6rem] font-semibold">
              UIUX Design
            </h1>
            <div className="icon border-[1px] rounded-full text-[1.5rem]">
              <MdKeyboardArrowUp />
            </div>
          </div>
        </summary>

        {data.map((el, idx) => (
          <Detail el={el} key={idx} />
        ))}
      </details>
    </div>
  );
};

export default Details;
