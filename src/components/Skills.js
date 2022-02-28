import React from "react";
import {
  BadgeCheckIcon,
  ChipIcon,
} from "@heroicons/react/solid";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-5 py-10">
      <div className="text-center mb-20">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text:3xl font-medium title-font text-white mb-4">
          Skills &amp; Technologies
        </h1>
        
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 m-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
