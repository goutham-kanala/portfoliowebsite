import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { achievements } from "../data";

export default function Projects() {
  return (
    <section id="achievements" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Achievements
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach) => (
            <a
              href={ach.link}
              key={ach.image}
              className="relative overflow-hidden group">
              <img
                alt="gallery"
                className="w-full h-200 object-cover object-center transform scale-100 group-hover:scale-110 transition-transform"
                src={ach.image}
              />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-8">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {ach.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {ach.title}
                  </h1>
                  <p className="leading-relaxed">{ach.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
