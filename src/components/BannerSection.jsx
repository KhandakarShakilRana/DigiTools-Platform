import React from "react";
import BannerImg from "../assets/banner.png";

const BannerSection = () => {
  return (
    <div className=" my-15 max-w-[1200px] text-center md:text-left mx-auto flex md:flex-row justify-between items-center flex-col">
      <div className="">
        <h1 className="!bg-[#E1E7FF] !text-[#4F39F6] inline px-4 py-2 rounded-4xl font-semibold">
          New: AI-Powered Tools Available
        </h1>
        <h1 className="text-[72px] font-semibold leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-[18px] !text-[#627382] mb-10 ">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today Explore
          Products
        </p>
        <div>
          <button className="btn !bg-[#4F39F6] mr-4 border-none !text-white rounded-4xl">Explore Products</button>
          <button className="btn bg-white mr-4 border-[#4F39F6]  !text-[#4F39F6] rounded-4xl">Watch Demo</button>
        </div>
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
