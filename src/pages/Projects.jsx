import { useEffect } from "react";
import ProjectItem from "../UI/ProjectItem";
import SectionHeader from "../UI/SectionHeader";
import { motion } from "framer-motion";

const list = [
  [
    { id: 0, image: "./assets/projects/project_1.png" },
    { id: 1, image: "./assets/projects/project_2.png" },
    { id: 2, image: "./assets/projects/project_3.png" },
    { id: 3, image: "./assets/projects/project_4.png" },
    { id: 4, image: "./assets/projects/project_5.png" },
    { id: 5, image: "./assets/projects/project_6.png" },
    { id: 6, image: "./assets/projects/project_7.png" },
    { id: 7, image: "./assets/projects/project_8.png" },
    { id: 8, image: "./assets/projects/project_9.png" },
  ],
  [
    { id: 9, image: "./assets/projects/project_10.png" },
    { id: 10, image: "./assets/projects/project_11.png" },
    { id: 11, image: "./assets/projects/project_12.png" },
    { id: 12, image: "./assets/projects/project_13.png" },
    { id: 13, image: "./assets/projects/project_14.png" },
    { id: 14, image: "./assets/projects/project_15.png" },
    { id: 15, image: "./assets/projects/project_16.png" },
    { id: 16, image: "./assets/projects/project_17.png" },
    { id: 17, image: "./assets/projects/project_18.png" },
  ],
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="Container xl:w-[1250px] mb-16 "
    >
      <SectionHeader
        title="Our projects"
        text="We present you the best works of our design studio. From stunning living rooms to the most unusual exclusive solutions."
      />
      <ProjectItem item={list} />
    </motion.div>
  );
};

export default Projects;
