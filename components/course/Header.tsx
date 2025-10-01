"use client";

import Image from "next/image";
import type React from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

const Header = ({
  setIsCollapsible,
}: {
  setIsCollapsible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between py-3 md:py-4 gap-3 md:gap-15 px-4 md:px-10 flex-wrap md:flex-nowrap">
      <div className="gap-3 flex items-center flex-1 md:flex-initial">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 w-[256px] bg-[#0F0F0F] border-r border-white/5"
          >
            <Sidebar isCollapsible={false} />
          </SheetContent>
        </Sheet>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsible((prev) => !prev)}
          className="hidden md:flex"
        >
          <Image
            src="/Vector.png"
            alt="Vector"
            width={20}
            height={20}
            className="opacity-70 cursor-pointer"
          />
        </Button>

        <Breadcrumb className="hidden lg:block">
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

      <div className="flex gap-2 md:gap-3 flex-1 justify-end items-center">
        <div className="relative w-full max-w-[400px] hidden md:block">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <Image
              src="/magnifying-glass.png"
              alt="m"
              width={16}
              height={16}
              className="mr-[20px]"
            />
          </span>
          <Input type="text" placeholder="     Search..." className="w-full" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer bg-[#1E1E1E]"
        >
          <Image
            src="/magnifying-glass.png"
            alt="search"
            width={20}
            height={20}
          />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer shadow-[inset_0px_1px_0px_0px_rgba(161,161,170,0.3)] bg-[#1E1E1E]"
        >
          <Image src="/bell.png" alt="bell" width={20} height={20} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden bg-[#1E1E1E] cursor-pointer"
        >
          <Image src="/rocket.png" alt="rocket" width={20} height={20} />
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="hidden md:flex shadow-[inset_0px_1px_0px_0px_rgba(161,161,170,0.3)] bg-[#1E1E1E] cursor-pointer"
        >
          <Image src="/rocket.png" alt="rocket" width={20} height={20} />
          <p className="font-semibold  text-white text-sm">Live Dashboard</p>
        </Button>
      </div>
    </div>
  );
};

export default Header;
