import { motion } from "framer-motion";
import { SectionWrapper } from "../higherOrderComponents"; 
import { textVariant } from "../utils/motion"; 
import { technologies } from "../constants";

import { styles } from "../styles";
// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  // Render a category with technologies
  const renderTechnologies = (category) => {
    return (
      <div key={category} className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 justify-center text-center">
        {category} 
      </h3>
      <div className="flex flex-col gap-2">
        {technologies[category].map((technology) => (
          <div key={technology.name} className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg justify-center text-center"> 
            <span className="text-base font-medium text-gray-900 dark:text-white ">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </div>
    );
  };


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div> 
            {renderTechnologies("Programming_Languages")} 
          </div>
          <div>
            {renderTechnologies("Frameworks")}
          </div>
          <div>
            {renderTechnologies("Tools")}
          </div> 
        </div> 
      </div> 
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "skills");
