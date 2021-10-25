import { UserIcon } from "@heroicons/react/solid";
import React from "react";

export default function Testimonials() {
  return (
    <section id="#testimonials">
      <div className="container mx-auto px-5 py-10 text-center">
        <UserIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonials
        </h1>
      </div>
    </section>
  );
}
// <div className="flex flex-wrap m-4">
//   {testimonials.map((testimonial) => (
//     <div className="p-4 md:w-12 w-full">
//       <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
//         <TerminalIcon className="block w-8 text-gray-500 mb-4" />
//         <p className="leading-relaxed mb-6">{testimonial.qoute}</p>
//         <div className="inline-flex flex-center">
//           <img
//             alt="testimonial"
//             src={testimonial.image}
//             className="w-12 rounded-full flex-shrink-0 object-cover object-center"
//           />
//           <span className="flex-grow flex flex-col pl-4">
//             <span className="title-font font-medium text-white">
//               {testimonial.name}{" "}
//             </span>
//             <span className="text-gray-500 text-sm uppercase">
//               {testimonail.company}
//             </span>
//           </span>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
