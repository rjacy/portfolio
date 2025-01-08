"use client";

import React from "react";
import { motion } from "motion/react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Home
    </motion.div>
  );
};

export default Home;
