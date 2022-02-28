import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="mx-auto px-20 py-20 md:flex-row flex-row items-center bg-gray-200">
        <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 md:items-end md:text-center mb-16 md:mb-0">
          <h1 className="sm:text-4xl text:3xl font-medium title-font text-gray-900 mb-4">
            A little about me...
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 md:items-end md:text-center mb-16 md:mb-0 text-center">
          <p className="text-base leading-relaxed lg:w-4/5 sm:mx-auto mx-2 text-gray-900">
            Over the past couple of years, I worked on getting myself comfortable
            with tech stack needed for frontend development. I am currently 
            expanding my into GitHub Actions and workflows. While at it, I am
            also honing my product management skills :rocket:. 
          </p>
        </div>
      </div>
    </section>
  );
}
