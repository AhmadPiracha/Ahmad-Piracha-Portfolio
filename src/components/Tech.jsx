/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../higherOrderComponents";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";

const ProgressCard = ({ name, level, isAnimated }) => (
  <div className="w-[45%] flex justify-center items-center mb-5 lg:mb-0 md:mb-0 sm:mb-10">
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px]"
    >
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          {name}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {`${level}%`}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          initial={isAnimated ? { width: 0 } : null}
          animate={{ width: isAnimated ? `${level}%` : 0 }}
          transition={{ duration: 2 }} // Adjust the duration value as needed (in seconds)
          className="bg-blue-700 rounded-full h-2.5 dark:bg-blue-500"
        ></motion.div>
      </div>
    </motion.div>
  </div>
);

const Tech = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-8" ref={ref}>
        {technologies.map((technology, index) => (
          <ProgressCard
            key={technology.name}
            index={index}
            isAnimated={isAnimated}
            {...technology}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
