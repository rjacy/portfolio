"use client";

import React from "react";
import { motion } from "motion/react";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

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
      <Footer />
    </motion.div>
  );
};

export default Home;
