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
      <div className="group relative rounded-2xl overflow-hidden card-hover sm:w-[360px] w-full border border-accent-violet/20 hover:border-accent-cyan/40 transition-all duration-300">
        {/* Card Content */}
        <div className="relative z-10 bg-black-100 rounded-2xl">
          {/* Image Container */}
          <div className="relative w-full h-[230px] rounded-t-xl overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay with Github Link */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-end items-end p-4 transition-all duration-300">
              <a 
                href={source_code_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent-cyan/20 hover:bg-accent-cyan/40 border border-accent-cyan/50 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-125"
              >
                <img src={github} alt="source code" className="w-6 h-6 filter brightness-0 invert" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-white font-bold text-[20px] group-hover:text-accent-cyan transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] group-hover:text-white-100 transition-colors duration-300">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={`${name}-${tag.name}`} 
                  className={`text-[12px] px-2 py-1 rounded-full bg-black-200 ${tag.color} font-medium group-hover:bg-black-100 transition-all duration-300`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
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
              className="animate-spin h-6 w-6 text-accent-cyan"
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
              className="group relative px-8 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 block group-hover:text-white transition-colors">
                Load More Projects
              </span>
            </button>
          )
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
