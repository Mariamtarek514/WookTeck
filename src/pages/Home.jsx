import React from "react";
import Hero from "../UI/Hero";
import { motion } from "framer-motion";
import About from "../UI/About";
import Banner from "../UI/Banner";
import OurBlog from "../UI/OurBlog";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Hero />
      <About />
      <Banner />
      <OurBlog />
    </motion.div>
  );
};

export default Home;
