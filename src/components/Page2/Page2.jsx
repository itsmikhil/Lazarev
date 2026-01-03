import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page2 = () => {
  return (
    <div
      className="
        page-2 w-full min-h-[80vh] flex justify-between
        px-[6em] py-[1em] mt-[10vh]
        lg:px-[3em] lg:flex-col lg:gap-[10vh]
        md:px-[2em] md:gap-[8vh]
        sm:px-[1.2em] sm:gap-[6vh]
      "
    >
      <Left />
      <Right />
    </div>
  );
};

export default Page2;
