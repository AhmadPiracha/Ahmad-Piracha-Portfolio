/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../higherOrderComponents";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";

const ProgressCard = ({ name, level }) => (
  <div className="w-[45%] flex justify-center items-center mb-5 lg:mb-0 md:mb-0 sm:mb-10 ">
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
      <div
        className={`w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}
      >
        <div
          className={`w-[${level}%] bg-blue-700 rounded-full h-2.5 dark:bg-blue-500`}
        ></div>
      </div>
    </motion.div>
  </div>
);
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-8">
        {technologies.map((technologies, index) => (
          <ProgressCard
            key={technologies.name}
            index={index}
            {...technologies}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
