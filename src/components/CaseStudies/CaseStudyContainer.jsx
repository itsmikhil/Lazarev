import React from "react";
import robotVideo from "../../assets/robot-video.mp4";
import robotThumbnail from "../../assets/robot-thumbnail.webp";
import pikaThumbnail from "../../assets/pika-thumbnail.webp";
import pikaVideo from "../../assets/pika-video.mp4";

import CaseStudy from "./CaseStudy";

const CaseStudyContainer = () => {
  let data = [
    {
      title: "Accern.Rhea Design Case Study",
      para: "Founded by Accern, a front-runner in No-Code NLP, Rhea stands as a personalized AI Associate designed to streamline FinTech workflows.",
      video: robotVideo,
      image: robotThumbnail,
    },
    {
      title: "Pika AI Design Case Study",
      para: "Pika AI is a new and better search engine that harnesses AI technology and helps people find the most relevant and interesting information from across the web.",
      video: pikaVideo,
      image: pikaThumbnail,
    },
  ];

  return (
    <div
      className="
        case-study-container w-[70%]
        flex gap-[6em]
        lg:w-full lg:flex-col lg:gap-[4em]
      "
    >
      {data.map((el, idx) => (
        <CaseStudy el={el} key={idx} />
      ))}
    </div>
  );
};


export default CaseStudyContainer;
