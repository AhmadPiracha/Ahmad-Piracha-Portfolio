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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Final year student at Fast National University, looking forward to
        working in Software Industry. I am familiar with programming languages,
        such as C++, Python, and Javascript, always adding new skills.I am an
        enthusiastic web developer, persistently engaged with the latest web
        frameworks and technologies. I’m also eager to meet other software
        designers in this domain, feel free to connect!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
