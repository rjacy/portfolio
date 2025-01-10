"use client";

import React from "react";
import { motion } from "motion/react";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Banner />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <div className="flex flex-col gap-5 font-[family-name:var(--font-syne)] bg-darkmode text-white px-5 md:px-10 lg:px-40 py-10 md:py-10">
        <hr />
        <span className="text-gray-500 text-lg font-medium">Copyright &copy; 2025 Alec Ogunniran</span>
      </div>
    </motion.div>
  );
};

export default Home;
