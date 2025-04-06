import React from "react";
import Box from "./Box";
import page2Image1 from '../../assets/page2-image-1.webp'
import page2Image2 from '../../assets/page2-image-2.jpeg'
import page2Image3 from '../../assets/page2-image-3.jpeg'
import page2Image4 from '../../assets/page2-image-4.avif'

const Right = () => {
  let data = [
    {
      text: "The Gestalt Principles of Design: How Design Forms Visual Perception",
      image:
        page2Image1,
    },
    {
      text: "Effective Design Principles for Crypto Web Design",
      image:
      page2Image2,
    },
    {
      text: "How to Design An AI InterFace Users will Trust in 2025?",
      image:
        page2Image3,
    },
    {
      text: "How AI Influences Design and the Reciprocal Impact of UX on AI-Driven Products",
      image:
        page2Image4,
    },
  ];

  return <div className="right flex flex-col h-full justify-between w-[50%]">
    {data.map((el,idx)=>{
        return <Box el={el} key={idx}/>
    })}
  </div>;
};

export default Right;
