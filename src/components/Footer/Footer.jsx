import React from "react";

const Footer = () => {
  return (
    <div
      className="
        footer w-full border-t-[1px] border-[#3a2c2c]
        px-[3em] py-[2em]
        flex justify-between items-start
        text-[0.95rem]
        lg:px-[2em] lg:flex-col lg:gap-[2em]
        md:px-[1.5em]
        sm:px-[1em] sm:text-[0.85rem]
      "
    >
      <div className="flex flex-col gap-[0.4em]">
        <h1 className="font-medium">LAZAREV. — Product Design Agency</h1>
        <h1 className="text-white/70">Made With ❤️ By Mikhil</h1>
      </div>

      <h1 className="text-white/60 lg:order-3">
        © {new Date().getFullYear()} All Rights Reserved
      </h1>

      <div className="flex flex-col gap-[0.4em] lg:items-start">
        <h1 className="text-white/70">This website uses cookies.</h1>
        <h1 className="underline cursor-pointer w-fit">Learn more</h1>
      </div>
    </div>
  );
};

export default Footer;
