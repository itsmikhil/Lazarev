import React from 'react'

const BottomBox = ({el}) => {
    let {topnum,text,para}=el;


  return (
    <div className="bottom-box flex flex-col justify-between bg-[#1F1F1F] w-[49.8%] min-h-[45vh] p-[2rem] rounded-[1rem]">
        <div className="top-content">
          <p className="text-[#505050] text-[0.8rem] font-semibold">{topnum}</p>
        </div>
        <div className="bottom-content flex flex-col">
          <h1 className="font-bold text-[2.5rem]">{text}</h1>
          <p className="w-[70%] text-[1.2rem] text-[#999999]">{para}</p>
        </div>
    </div>
  )
}

export default BottomBox