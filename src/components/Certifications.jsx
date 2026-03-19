/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../higherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion"
import { certificates } from "../constants";

const CertificateCard = ({ index, name,tags, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=" p-5 rounded-2xl xs:w-full w-full bg-tertiary sm:w-[320px]"
  >
        <div >
      <div className="relative w-full h-full">
        <a href={source_code_link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        </a>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
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

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I learned</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.name} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
