import React from "react";

const NavOption = ({ el }) => {
  let { main, bottom } = el;
  return (
    <div className="nav-option">
      <div className="top uppercase">
        <h3 className="text-[0.8rem] font-bold">{main}</h3>
      </div>
      <div className="bottom flex flex-col hidden mt-[1.5em] gap-[2.5em]">
        {bottom.map((el,idx)=>{
            return <span key={idx} className="overflow-hidden block"><h3 className="capitalize text-[0.8rem] font-semibold cursor-pointer">{el}</h3></span>
        })}
      </div>
    </div>
  );
};

export default NavOption;
