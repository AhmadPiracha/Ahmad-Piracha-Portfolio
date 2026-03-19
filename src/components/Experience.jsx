/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { education } from "../constants";

import { SectionWrapper } from "../higherOrderComponents";
import { textVariant } from "../utils/motion";

const SummaryCard = ({ title, company_name, points, date, icon, iconBg }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0px 0px 10px 0px #1d1836",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{
        background: iconBg,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Resume</p>
          <h2 className={styles.sectionHeadText}>My Experience.</h2>

        </motion.div>

        <div className="mt-10 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <SummaryCard
                key={index}
                {...experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* EDUCATION */}
      <div className="mt-5">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>My Education</h2>
        </motion.div>

        <div className="mt-10 flex flex-col">
          <VerticalTimeline>
            {education.map((edu, index) => (
              <SummaryCard key={index} {...edu} />
            ))}
          </VerticalTimeline>
        </div>
      </div>

       {/* CERTIFICATION */}
       {/* <div className="mt-5">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>My Certifications</h2>
        </motion.div>
      </div> */}
    </>
  );
};

export default SectionWrapper(Experience, "resume");
