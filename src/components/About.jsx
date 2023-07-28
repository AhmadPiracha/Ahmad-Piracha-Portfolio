/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../higherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className={styles.heroSubText}
      >
        Hi, I'm <span className="text-[#fefdff]">Ahmad Waseem Piracha</span>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-secondary max-w-3xl
          text-base sm:text-lg lg:text-xl   // Responsive text sizes
        `}
      >
        "Experienced web developer with a strong focus on frontend technologies,
        specializing in creating clean, user-friendly websites. Looking forward
        to working in the Software Industry. By utilizing cutting-edge frontend
        frameworks and tools, I deliver impactful digital experiences. Let's
        collaborate to bring your vision to life! Feel free to connect."
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
