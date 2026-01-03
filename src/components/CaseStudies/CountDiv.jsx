import React from "react";

let data = [
  { type: "AI", count: 2 },
  { type: "FINTECH", count: 3 },
  { type: "WEB3", count: 4 },
  { type: "OTHER", count: 2 },
];

const CountDiv = () => {
  return (
    <div
      className="
        count-div w-[20%] h-fit
        sticky top-[10%]
        flex flex-col gap-[1em]
        lg:w-full lg:relative lg:flex-row lg:gap-[2em]
        md:flex-wrap
      "
    >
      {data.map((el, idx) => (
        <div
          key={idx}
          className="
            count flex justify-between
            border-b-[1px] border-[#2c2828]
            pb-[0.6em]
            cursor-pointer
            text-[1rem]
            md:border md:rounded-full md:px-[1em] md:py-[0.4em]
          "
        >
          <p>{el.type}</p>
          <p>[{el.count}]</p>
        </div>
      ))}
    </div>
  );
};

export default CountDiv;
