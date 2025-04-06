import React from 'react'
import BottomBox from './BottomBox';

const Bottom = () => {
    let data = [
        {
          topnum: "/ 04",
          text: "San Francisco",
          para: "Based in heart of AI",
        },
        {
          topnum: "/ 05",
          text: "All-in-one Solution",
          para: "From user-research to scalable design systems we've got you covered",
        },
      ];
  return (
    <div className="bottom flex justify-between  ">
        {data.map((el,idx)=>{
            return <BottomBox el={el} key={idx}/>
        })}
    </div>
  )
}

export default Bottom