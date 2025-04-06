import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page2 = () => {
  return (
    <div className="page-2 flex w-full min-h-[80vh] justify-between px-[6em] py-[1em] mt-[10vh]">
      <Left/>
      <Right/>
    </div>
  );
};

export default Page2;
