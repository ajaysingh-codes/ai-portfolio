"use client";

import React from "react";
import { skills } from "@/data";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My<span className="text-purple"> Technical Skills</span>
      </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 max-w-screen-lg mx-auto">
          {skills.map((skill) => (
            <React.Fragment key={skill.id}>
            <div className="flex flex-col items-center md:max-w-60 max-w-32 gap-2 p-4 rounded-md shadow-sm">
            <Image
              src={skill.url}
              alt={skill.name}
              width={64}
              height={64}
              className="mt-8 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <p className="text-sm md:text-lg text-center mt-2">{skill.name}</p>
          </div>
</React.Fragment>
          ))}
        </div>
    </section>
  );
};

export default Skills;
