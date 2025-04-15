/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../higherOrderComponents";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div initial="hidden" animate="show" variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a href={source_code_link} target="_blank" rel="noopener noreferrer">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="source code" className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => {
        const newValue = Math.min(prev + 6, projects.length);
        return newValue;
      });
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 overflow-visible">
      {projects.slice(0, visibleProjects).map((project, index) => (
        <ProjectCard
          key={project.id || `project-${index}`}
          index={index}
          delay={index % 6 * 0.5}
          {...project}
        />
      ))}
      </div>
      <div className="text-center mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </div>
        ) : (
          visibleProjects < projects.length && (
            <button
              onClick={handleLoadMore}
              className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Load More
            </button>
          )
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
