import Image from "next/image";

const Buy = () => {
  return (
    <div className="w-full lg:w-[40%] rounded-xl bg-[#1E1E1E66]">
      <Image
        src="/cubes.jpeg"
        alt="cubes"
        width={200}
        height={200}
        className="mx-auto mt-6"
      />
      <div className="px-4 md:px-8 mx-auto">
        <div className="mt-5">
          <del className="font-semibold text-xl text-[#A1A1AA]">₹5,000</del>
          <div className="flex gap-x-3 items-end">
            <p className="text-3xl text-[#FCFCFC] font-bold">₹2,500</p>
            <p className="rounded-md px-3 py-1 text-xs bg-[#FAFAFA1A] text-[#FCFCFC]">
              50%Off
            </p>
          </div>
        </div>

        <div className="w-full rounded-full py-1 px-2 bg-[#1E1E1E] mt-4 flex gap-x-2 items-center justify-center">
          <Image src="/Frame69.png" alt="star" height={16} width={50} />
          <p className="text-[#FCFCFC] text-xs">4.5 out of 5</p>
          <p className="w-0.5 h-4 bg-[#FCFCFC]"></p>
          <p className="font-medium text-[#FCFCFC] text-xs">50000+ students</p>
        </div>
        <button className="cursor-pointer w-full rounded-xl py-2 px-3 bg-gradient-to-r from-[#5B76DB] to-[#AB82EB] p-6 text-white mt-5">
          Buy Now
        </button>
        <div className="h-0.5 w-65 my-4 mx-auto bg-[#0F0F0F]"></div>

        <div className="mt-5">
          <p className="text-[#A1A1AA] text-sm font-semibold mt-4">
            This course includes
          </p>
          <div className="flex flex-col gap-y-2 mt-4">
            <div className="flex gap-x-4">
              <Image
                src="/hammer-and-anvil.png"
                alt="alt"
                width={18}
                height={16}
              />
              <p className="text-[#FCFCFC]">No Pre-requisite Required</p>
            </div>
            <div className="flex gap-x-4">
              <Image src="/play.png" alt="alt" width={18} height={16} />
              <p className="text-[#FCFCFC]">50+ hours On-Demand Video</p>
            </div>
            <div className="flex gap-x-4">
              <Image src="/broadcast.png" alt="alt" width={18} height={16} />
              <p className="text-[#FCFCFC]">60 Live Lectures</p>
            </div>
            <div className="flex gap-x-4">
              <Image
                src="/thinking-problem.png"
                alt="alt"
                width={18}
                height={16}
              />
              <p className="text-[#FCFCFC]">8 Real World Design Problems</p>
            </div>
            <div className="flex gap-x-4">
              <Image src="/camera-five.png" alt="alt" width={18} height={16} />
              <p className="text-[#FCFCFC]">Live Interview Preparation</p>
            </div>
            <div className="flex gap-x-4">
              <Image src="/book.png" alt="alt" width={18} height={16} />
              <p className="text-[#FCFCFC]">Live Revision & Doubts Class</p>
            </div>
            <div className="flex gap-x-4">
              <Image
                src="/lattice-pattern.png"
                alt="alt"
                width={18}
                height={16}
              />
              <p className="text-[#FCFCFC]">LLD - Design Patterns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-5 rounded-xl bg-[#1E1E1E66] mt-15">
        <div className="text-sm text-[#FCFCFC]">
          Classes start on 25th April, 2024
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <div className="flex gap-x-4">
            <Image src="/play.png" alt="play" height={16} width={16} />
            <p className="text-sm text-[#A1A1AA]">
              Monday, Wednesday, Saturday, Sunday
            </p>
          </div>
          <div className="flex gap-x-4">
            <Image src="/clock-4.png" alt="play" height={16} width={16} />
            <p className="text-sm text-[#A1A1AA]">
              Class Timings 8:30pm - 11pm
            </p>
          </div>
          <div className="flex gap-x-4">
            <Image src="/code2.png" alt="play" height={16} width={16} />
            <p className="text-sm text-[#A1A1AA]">C++</p>
          </div>
          <div className="flex gap-x-4">
            <Image src="/calendar.png" alt="play" height={16} width={16} />
            <p className="text-sm text-[#A1A1AA]">Course Validity 2 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
