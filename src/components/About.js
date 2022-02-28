import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="flex px-10 py-20 md:flex-column flex-column bg-gray-100">
        <div className="lg:flex-row md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi! I am Ramya
          </h1>
        </div>
        <div className="px-10 py-20 md:flex-row flex-row items-center bg-gray-100">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
            <p className="text-base leading-relaxed lg:w-4/5 sm:mx-auto mx-2 text-gray-900">
            Over the past couple of years, I worked on getting myself comfortable
            with tech stack needed for frontend development. I am currently 
            expanding my into GitHub Actions and workflows. While at it, I am
            also honing my product management skills :rocket:. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
