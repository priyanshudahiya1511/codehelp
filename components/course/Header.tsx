import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Header = ({
  setIsCollapsible,
}: {
  setIsCollapsible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className=" flex justify-between py-4  gap-15 px-10  ">
      <div className="  gap-3 flex  items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsible((prev) => !prev)}
        >
          <Image
            src="/Vector.png"
            alt="Vector"
            width={20}
            height={20}
            className="opacity-70 cursor-pointer"
          />
        </Button>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                Data Structures & Algorithms [Codehelp RED]
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-3 flex-1 justify-end">
        <div className="relative w-full max-w-[400px]">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <Image
              src="/magnifying-glass.png"
              alt="m"
              width={16}
              height={16}
              className="mr-[20px]"
            />
          </span>
          {/* <span className="absolute inset-y-0 right-10 flex items-center">
            <Image
              src="/command.png"
              alt="m"
              width={16}
              height={16}
              className="mr-[20px]"
            />
          </span>
          <span className="absolute inset-y-0 right-3 bg-[#FAFAFA1A]/10 flex items-center">
            <Image
              src="/k.png"
              alt="m"
              width={16}
              height={16}
              className="mr-[20px]"
            />
          </span> */}
          <Input type="text" placeholder="     Search..." className=" w-full" />
        </div>
        <div className="">
          <Button
            variant="ghost"
            size="icon"
            className=" cursor-pointer bg-[#1E1E1E]"
          >
            <Image src="/bell.png" alt="bell" width={20} height={20} />
          </Button>
        </div>
        <Button
          variant={"ghost"}
          size="lg"
          className=" bg-[#1E1E1E] cursor-pointer"
        >
          <Image src="/rocket.png" alt="rocket" width={20} height={20} />
          <p className=" font-semibold text-white text-sm">Live Dashboard</p>
        </Button>
      </div>
    </div>
  );
};

export default Header;
