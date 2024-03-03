import React from "react";
import Hero from "../UI/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Hero />
    </motion.div>
  );
};

export default Home;
