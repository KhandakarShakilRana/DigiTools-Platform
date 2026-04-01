import React from "react";
import UserImg from "../assets/user.png";
import PackageImg from "../assets/package.png";
import RocketImg from "../assets/rocket.png";

const GetStated = () => {
  return (
    <div className="text-center mb-30 mx-6">
      <div className="mb-8 ">
        <h1 className="text-[40px] mb-4 font-semibold">
          Get Started in 3 Steps
        </h1>
        <p className="font-light">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <div className="flex flex-col max-w-75 items-center max-w-[300px] h-70  justify-center gap-4 p-6 rounded-4xl shadow-sm relative border-4 border-[#e9edf0]">
          <div className="bg-[#4F39F6] h-10 w-10 rounded-full flex items-center justify-center text-white absolute top-4 right-4 shadow-xl">
            01
          </div>
          <img className="h-[45px] w-[45px]" src={UserImg} alt="" />
          <p className="font-bold text-[24px] text-[#101727]">Create Account</p>
          <p className="text-[#627382] font-light">
            {" "}
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="flex flex-col max-w-75 items-center max-w-[300px] h-70  justify-center gap-4 p-6 rounded-4xl shadow-sm relative border-4 border-[#e9edf0]">
          <div className="bg-[#4F39F6] h-10 w-10 rounded-full flex items-center justify-center text-white absolute top-4 right-4 shadow-xl">
            02
          </div>
          <img className="h-[45px] w-[45px]" src={PackageImg} alt="" />
          <p className="font-bold text-[24px] text-[#101727]">
            Choose Products
          </p>
          <p className="text-[#627382] font-light">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="flex flex-col max-w-75 items-center max-w-[300px] h-70  justify-center gap-4 p-6 rounded-4xl shadow-sm relative border-4 border-[#e9edf0]">
          <div className="bg-[#4F39F6] h-10 w-10 rounded-full flex items-center justify-center text-white absolute top-4 right-4 shadow-xl">
            03
          </div>
          <img className="h-[45px] w-[45px]" src={RocketImg} alt="" />
          <p className="font-bold text-[24px] text-[#101727]">Start Creating</p>
          <p className="text-[#627382] font-light">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStated;
