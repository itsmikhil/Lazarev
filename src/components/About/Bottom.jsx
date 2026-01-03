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
    <div className="bottom  col-span-12 row-span-5 grid grid-cols-2 gap-1  ">
        {data.map((el,idx)=>{
            return <BottomBox el={el} key={idx}/>
        })}
    </div>
  )
}

export default Bottom