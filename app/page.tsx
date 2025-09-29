"use client";
import Header from "@/components/course/Header";
import Sidebar from "@/components/course/Sidebar";
import Image from "next/image";
import { useState } from "react";
import Details from "@/components/course/Deatil";
import Content from "@/components/course/Content";
import Buy from "@/components/course/Buy";

const page = () => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  return (
    <div className="w-full h-screen bg-[#0F0F0F] flex relative">
      <Sidebar isCollapsible={isCollapsible} />
      <div className="h-screen overflow-y-auto w-full ">
        <Header setIsCollapsible={setIsCollapsible} />
        <div className="flex gap-10 mt-2 px-10">
          <div className="w-full  flex flex-col gap-y-8 ">
            <div className="flex  justify-between">
              <h4 className="text-white text-xl">
                Data Structures & Algorithms [Codehelp RED]
              </h4>
              <div className=" rounded-full flex mt-2">
                <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                  <Image
                    src="/clock-4.png"
                    alt="clock"
                    height={16}
                    width={16}
                  />
                  <p className="text-xs font-medium text-gray-400">120 Hours</p>
                </div>
                <div className=" flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                  <Image
                    src="/layers.png"
                    alt="layers"
                    height={16}
                    width={16}
                  />
                  <p className="text-xs font-medium text-gray-400">
                    60 Chapters
                  </p>
                </div>
                <div className=" flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                  <Image
                    src="/languages.png"
                    alt="languages"
                    height={16}
                    width={16}
                  />
                  <p className="text-xs font-medium text-gray-400">Hindi</p>
                </div>
              </div>
            </div>

            <div className="  text-sm text-gray-400">
              A comprehensive program that covers the fundamentals of data
              structures and algorithms. It includes lectures and exercises to
              help students design and implement efficient solutions. This
              course is suitable for beginners and experienced programmers and
              aims to prepare students for technical interviews and placement
              exams.
            </div>

            <Details />

            <Content />
          </div>

          <Buy />
        </div>
      </div>
    </div>
  );
};

export default page;
