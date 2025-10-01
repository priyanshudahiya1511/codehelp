import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

const sidebarItems = [
  { label: "Dashboard", img: "/dashboard.png", href: "/" },
  { label: "All Courses", img: "/library.png", href: "/" },
  { label: "Articles", img: "/newspaper.png", href: "/" },
  { label: "Playground", img: "/code.png", href: "/" },
  { label: "Guided Path", img: "/guide-board.png", href: "/" },
  { label: "Tutorials", img: "/file-question.png", href: "/" },
  { label: "DSA Preparation", img: "/code-laptop.png", href: "/" },
  { label: "Mock Test", img: "/clipboard.png", href: "/" },
  { label: "Paste", img: "/clipboard-paste.png", href: "/" },
  { label: "Core Subjects", img: "/graduation-cap.png", href: "/" },
  { label: "Quick Compiler", img: "/code-computer.png", href: "/" },
  { label: "Flex Fruit Box", img: "/apple-one.png", href: "/" },
  { label: "Interview Experience", img: "/chat-bubble.png", href: "/" },
  { label: "Help", img: "/help-circle.png", href: "/" },
];

const Sidebar = ({ isCollapsible }: { isCollapsible: boolean }) => {
  const [selected, setSelected] = useState("All Courses");
  return (
    <div
      className={`sidebar h-screen duration-200 ${
        isCollapsible ? "w-20" : "w-[256px]"
      } overflow-y-auto bg-[#1E1E1E]/20 gap-3 pt-5 pb-5 pl-3 pr-3 flex
    flex-col transition-all duration-300 ease-in-out`}
    >
      <div className="border-b-2 border-white/5 pb-3 gap-2.5 flex justify-center items-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          height={40}
          width={40}
          className="shrink-0"
        />
        <span
          className={`text-white text-lg font-bold whitespace-nowrap transition-all duration-300 ${
            isCollapsible
              ? "opacity-0 w-0 overflow-hidden"
              : "opacity-100 w-auto"
          }`}
        >
          CODE HELP
        </span>
      </div>

      <div className="space-y-1 pb-10">
        {sidebarItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size={isCollapsible ? "icon" : "default"}
            asChild
            onClick={() => setSelected(item.label)}
            className={`${
              selected === item.label
                ? "bg-[#1E1E1E] shadow-[inset_0px_1px_0px_0px_rgba(161,161,170,0.3)] text-white"
                : ""
            }`}
          >
            <Link
              className={`text-[#A1A1AA] w-full ${
                isCollapsible ? "justify-center" : "justify-start"
              } hover:text-white`}
              href={item.href}
            >
              <Image
                src={item.img || "/placeholder.svg"}
                alt="img"
                width={20}
                height={20}
                className="shrink-0"
              />
              <div
                className={`transition-all duration-300 ${
                  isCollapsible
                    ? "opacity-0 w-0 overflow-hidden"
                    : "opacity-100 w-full"
                }`}
              >
                {item.label}
              </div>
            </Link>
          </Button>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          className="text-[#A1A1AA] text-sm hover:text-white flex items-center gap-x-3 border border-transparent hover:border-[#27272A] hover:rounded-xl px-3 py-2 hover:bg-[#1E1E1E]"
          href="#"
        >
          <Image
            src="/discord-logo.png"
            alt="img"
            width={20}
            height={20}
            className="shrink-0"
          />
          <div
            className={`transition-all duration-300 ${
              isCollapsible
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 w-auto"
            }`}
          >
            Join Discord
          </div>
        </Link>

        <button
          className="text-[#A1A1AA] w-full cursor-pointer text-sm hover:text-white flex items-center gap-x-3 border border-transparent hover:border-[#27272A] hover:rounded-xl px-3 py-2 
        hover:bg-[#1E1E1E]"
        >
          <Image
            src="/moon.png"
            alt="img"
            width={20}
            height={20}
            className="shrink-0"
          />
          <div
            className={`transition-all duration-300 ${
              isCollapsible
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 w-auto"
            }`}
          >
            Night Mode
          </div>
        </button>

        <div
          className="border rounded-xl border-[#27272A] flex items-center gap-x-3 mt-2
            hover:border hover:border-[#27272A] hover:rounded-xl hover:bg-[#1E1E1E] p-2 cursor-pointer"
        >
          <Image
            src="/Rectangle 5.png"
            alt="Logo"
            width={24}
            height={24}
            className="rounded-full shrink-0"
          />
          <div
            className={`flex items-center gap-x-3 transition-all duration-300 ${
              isCollapsible
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 w-auto"
            }`}
          >
            <div className="w-[124px] h-[32px]">
              <p className="h-[16px] font-[Plus Jakarta Sans] text-gray-400 text-[12px]">
                Kuldeep Saini
              </p>
              <p className="h-[16px] font-[Plus Jakarta Sans] text-gray-500 text-[12px]">
                kuldeepsaini@gmail...
              </p>
            </div>
            <Image src="/caret-right.png" alt="img" height={16} width={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
