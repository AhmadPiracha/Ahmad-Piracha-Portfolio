/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../higherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <div className="lg:w-[45%] md:w-[45%] sm:w-[100%] flex justify-center items-center mb-5 lg:mb-0 md:mb-0 sm:mb-10 ">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col flex-wrap"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <h3 className="text-white text-[15px] text-center">{description}</h3>
      </div>
    </motion.div>
  </div>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          How I can help your next project
        </p>
        <h2 className={styles.sectionHeadText}>What I Do?</h2>

      </motion.div>
      <div className="mt-10 flex flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
