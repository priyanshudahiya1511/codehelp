import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronUp } from "lucide-react";

const Content = () => {
  return (
    <div className="text-[#FCFCFC]">
      <h1 className="text-xl font-semibold text-[#FCFCFC]">Course Content</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <ChevronUp className="size-4 transition-transform duration-200 group-data-[state=closed]:rotate-180 shrink-0" />
              <p className="text-left">C++ & Basic of Programming</p>
            </div>
            <div className="gap-2 md:gap-3 rounded-full flex flex-col md:flex-row mt-2 md:mt-0 ml-2">
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  5 Lectures
                </p>
              </div>
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  20 mins
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-balance">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-x-2 items-center">
                  <Image src="/video.png" height={20} width={20} alt="video" />
                  <p className="text-[#A1A1AA]">Introduction</p>
                </div>
                <div className="text-[#A1A1AA]">04:01</div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-x-2 items-center">
                  <Image src="/video.png" height={20} width={20} alt="video" />
                  <p className="text-[#A1A1AA]">What are flow charts?</p>
                </div>
                <div className="text-[#A1A1AA]">04:01</div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-x-2 items-center">
                  <Image
                    src="/file-code.png"
                    height={20}
                    width={20}
                    alt="video"
                  />
                  <p className="text-[#A1A1AA]">Resources</p>
                </div>
                <div className="text-[#A1A1AA]">04:01</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="flex items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <ChevronUp className="size-4 transition-transform duration-200 group-data-[state=closed]:rotate-180 shrink-0" />
              <p className="text-left">Arrays & Complexity</p>
            </div>

            <div className="gap-2 md:gap-3 rounded-full flex flex-col md:flex-row mt-2 md:mt-0 ml-2">
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  5 Lectures
                </p>
              </div>
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  20 mins
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Hello</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="flex items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <ChevronUp className="size-4 transition-transform duration-200 group-data-[state=closed]:rotate-180 shrink-0" />
              <p className="text-left">Searching & Sorting</p>
            </div>

            <div className="gap-2 md:gap-3 rounded-full flex flex-col md:flex-row mt-2 md:mt-0 ml-2">
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  5 Lectures
                </p>
              </div>
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  20 mins
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Hello</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="flex items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <ChevronUp className="size-4 transition-transform duration-200 group-data-[state=closed]:rotate-180 shrink-0" />
              <p className="text-left">Char Arrays & Strings</p>
            </div>
            <div className="gap-2 md:gap-3 rounded-full flex flex-col md:flex-row mt-2 md:mt-0 ml-2">
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/layers.png" alt="clock" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  5 Lectures
                </p>
              </div>
              <div className="flex items-center rounded-full py-1 px-2 gap-2 bg-[#1E1E1E]">
                <Image src="/clock-4.png" alt="layers" height={16} width={16} />
                <p className="text-xs font-medium text-gray-400 whitespace-nowrap">
                  20 mins
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 rounded-b-lg text-balance">
            <p>Hello</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Content;
