import React from "react";
import TopBox from "./TopBox";
import bgVideo1 from "../../assets/background-video-1.webm";
import bgVideo2 from "../../assets/background-video-2.webm";
import bgVideo3 from "../../assets/background-video-3.webm";

const Top = () => {
  let data = [
    {
      topnum: "/ 01",
      num: "$500M+",
      para: "in funding secured from our clients",
      video: bgVideo1,
    },
    {
      topnum: "/ 02",
      num: "120+",
      para: "Awards backing our Excellence",
      video: bgVideo2,
    },
    {
      topnum: "/ 03",
      num: "2015",
      para: "Founded,10 years of experience",
      video: bgVideo3,
    },
  ];

  return (
    <div className="top col-span-12 row-span-6 grid grid-cols-3 gap-1">
      {data.map((el, idx) => {
        return <TopBox el={el} key={idx}/>;
      })}
    </div>
  );
};

export default Top;
