// import { Check } from "lucide-react";

// const topics = [
//   {
//     title: "Programming Foundations",
//     text: "Flowcharts, Variables, Data Types, Loops, Conditionals, Functions, Pattern Printing",
//   },
//   {
//     title: "Mathematics & Logic Building",
//     text: "Basic Math, Searching & Sorting Algorithms, Bit Manipulation, Time & Space Complexity",
//   },
//   {
//     title: "Problem Solving Techniques",
//     text: "Recursion, Backtracking, Divide & Conquer, Greedy Algorithms, Sliding Window, Dynamic Programming",
//   },
//   {
//     title: "Core C++ Concepts",
//     text: "Arrays (1D & 2D), Dynamic Arrays, Char Arrays, Pointers, Object-Oriented Programming",
//   },
//   {
//     title: "Data Structures",
//     text: "Linked Lists, Stacks & Queues, Trees, Heaps, Hashing & Tries, Graphs",
//   },
//   {
//     title: "Extra Topics & Practice",
//     text: "Smart Code Flow, In-depth Execution, Real-world Practice Problems, Optimization Techniques",
//   },
// ];

// export default function Details() {
//   return (
//     <section className="p-6 rounded-2xl bg-[#1E1E1E66]">
//       <h1 className="text-xl text-[#FCFCFC] mb-5">What you will learn</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {topics.map((topic, index) => (
//           <div key={index} className="flex items-start gap-3">
//             <Check className="text-white w-5 h-5 mt-1 flex-shrink-0" />
//             <div>
//               <h2 className="font-semibold text-base">{topic.title}:</h2>
//               <p className="text-gray-300 text-sm mt-1">{topic.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Check } from "lucide-react";

const topics = [
  {
    title: "Programming Foundations",
    text: "Flowcharts, Variables, Data Types, Loops, Conditionals, Functions, Pattern Printing",
  },
  {
    title: "Mathematics & Logic Building",
    text: "Basic Math, Searching & Sorting Algorithms, Bit Manipulation, Time & Space Complexity",
  },
  {
    title: "Problem Solving Techniques",
    text: "Recursion, Backtracking, Divide & Conquer, Greedy Algorithms, Sliding Window, Dynamic Programming",
  },
  {
    title: "Core C++ Concepts",
    text: "Arrays (1D & 2D), Dynamic Arrays, Char Arrays, Pointers, Object-Oriented Programming",
  },
  {
    title: "Data Structures",
    text: "Linked Lists, Stacks & Queues, Trees, Heaps, Hashing & Tries, Graphs",
  },
  {
    title: "Extra Topics & Practice",
    text: "Smart Code Flow, In-depth Execution, Real-world Practice Problems, Optimization Techniques",
  },
];

export default function Details() {
  return (
    <section className="p-6 rounded-2xl bg-[#1E1E1E66]">
      <h1 className="text-xl text-[#FCFCFC] mb-5">What you will learn</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="text-white w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-base">{topic.title}:</h2>
              <p className="text-gray-300 text-sm mt-1">{topic.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
