import React from "react";

let data = [
  { type: "AI", count: 2 },
  { type: "FINTECH", count: 3 },
  { type: "WEB3", count: 4 },
  { type: "OTHER", count: 2 },
];

const CountDiv = () => {
  return <div className="count-div w-[20%] sticky top-[10%] h-[20vh]">
    {data.map((el,idx)=>{
        return <div key={idx} className="count flex border-b-[1px] justify-between cursor-pointer"><p>{el.type}</p><p>[{el.count}]</p></div>
    })}
  </div>;
};

export default CountDiv;
