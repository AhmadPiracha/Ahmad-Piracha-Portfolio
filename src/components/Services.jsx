/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../higherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <div className="lg:w-[45%] md:w-[45%] sm:w-[100%] flex justify-center items-center mb-5 lg:mb-0 md:mb-0 sm:mb-10">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full"
    >
      <div className="group relative rounded-[20px] overflow-hidden card-hover">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Card Content */}
        <div className="relative z-10 bg-black-100 hover:bg-black-100/80 rounded-[20px] py-8 px-12 min-h-[320px] flex flex-col justify-center items-center gap-4 border border-accent-violet/20 group-hover:border-accent-cyan/40 transition-all duration-300">
          {/* Icon Container */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 group-hover:from-accent-cyan/15 group-hover:to-accent-violet/15 transition-all duration-300">
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain filter group-hover:brightness-125 transition-all duration-300"
            />
          </div>

          {/* Title */}
          <h3 className="text-white text-[20px] font-bold text-center group-hover:text-accent-cyan transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-secondary text-[14px] text-center leading-6 group-hover:text-white-100 transition-colors duration-300">
            {description}
          </p>

          {/* Accent Line */}
          <div className="mt-4 h-1 w-8 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
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
