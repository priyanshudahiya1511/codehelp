import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Content = () => {
  return (
    <div className=" text-[#FCFCFC]">
      <h1 className="text-xl font-semibold text-[#FCFCFC]">Course Content</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p>C++ & Basic of Programming</p>
            </div>
            <div className=" gap-3 rounded-full flex mt-2">
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">5 Lectures</p>
              </div>
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">20 mins</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Hello</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="flex ">
            Arrays & Complexity
            <div className=" gap-3 rounded-full flex mt-2">
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">5 Lectures</p>
              </div>
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">20 mins</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Hello</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="flex">
            Searching & Sorting
            <div className="  gap-3 rounded-full flex mt-2">
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">5 Lectures</p>
              </div>
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">20 mins</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Hello</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="flex">
            Char Arrays & Strings
            <div className="  gap-3 rounded-full flex mt-2">
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">5 Lectures</p>
              </div>
              <div className=" flex items-center  rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400">20 mins</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Hello</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Content;
