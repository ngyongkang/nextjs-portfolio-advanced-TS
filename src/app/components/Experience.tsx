"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/staticData";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left max-w-full px-10 justify-evenly mx-auto items-center
        md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-secondary-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experiences.map(function (experience, index) {
          return (
            <ExperienceCard
              key={index}
              company={experience.company}
              jobTitle={experience.jobTitle}
              techUsed={experience.techUsed}
              dates={experience.dates}
              points={experience.points}
            />
          );
        })}
      </div>
    </motion.div>
  );
}