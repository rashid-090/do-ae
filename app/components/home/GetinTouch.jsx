"use client";
import Link from "next/link";
import React from "react";
import { Grade } from "../../../public";
import { HiArrowLongRight } from "react-icons/hi2";
import Marquee from "react-fast-marquee";
const GetinTouch = () => {
  return (
    <>
    <div
      className="w-full min-h-[280px] xl:min-h-[350px] flex items-center justify-center bg-gradient-to-r from-black via-green-900 to-black md:rounded-3xl relative overflow-hidden p-6"
      style={{
        backgroundImage: `url(${Grade.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* overlay */}
      <div className="w-full h-full absolute top-0 left-0 bg-[#00000021]"></div>

      {/* Floating elements */}
      {/* <span className="absolute left-80 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white text-xs rounded-full px-3 py-1.5 shadow-lg">30 Min Call</span> */}
      {/* <span className="absolute right-80 top-1/2 transform -translate-y-1/2 bg-orange-400 px-3 py-1.5 text-white text-xs rounded-full  shadow-lg rotate-[-14deg]">Consultation</span> */}

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl xl:text-5xl font-bold capitalize text-white mb-4 text-center leading-tight">
          Ready to kick off
          <br />a project?
        </h2>

        <div className="group flex items-center mt-5 xl:mt-10 primary-bg hover:bg-black hover:text-[#AEFE00] text-sm px-10 py-4 rounded-full cursor-pointer relative">
          <Link href={"/"} className="z-10">
            Get in Touch
          </Link>
          {/* Arrow absolutely positioned */}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl text-[#AEFE00] opacity-0 pointer-events-none transition-all duration-300 ease-in-out translate-x-[-16px] group-hover:translate-x-3 group-hover:opacity-100">
            <HiArrowLongRight />
          </span>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="bg-[#0C0D14]">
        <Marquee gradient gradientColor="#0C0D14" className="py-10">
            <a href="#" className="text-4xl xl:text-9xl font-medium text-gray-600 hover:text-gray-400">info@dostudio.co.in</a>
        </Marquee>
    </div>
    </>
  );
};

export default GetinTouch;
