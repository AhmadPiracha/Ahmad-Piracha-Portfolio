/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { SectionWrapper } from "../higherOrderComponents";
import { textVariant, fadeIn } from "../utils/motion";
import { technologies } from "../constants";
import { styles } from "../styles";

const categoryConfig = {
  Languages: {
    accent: "from-accent-cyan to-blue-500",
    border: "border-accent-cyan/30",
    badge: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(0,217,255,0.12)]",
    label: "Languages",
  },
  Frameworks: {
    accent: "from-accent-violet to-purple-500",
    border: "border-accent-violet/30",
    badge: "bg-accent-violet/10 text-accent-violet border-accent-violet/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]",
    label: "Frameworks & Libraries",
  },
  Tools: {
    accent: "from-accent-emerald to-green-500",
    border: "border-accent-emerald/30",
    badge: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]",
    label: "Tools & Platforms",
  },
};

const TechCategory = ({ category, index }) => {
  const config = categoryConfig[category] || categoryConfig.Languages;
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className={`group relative p-6 rounded-2xl bg-black-100 border ${
        config.border
      } transition-all duration-500 ${config.glow}`}
    >
      {/* Top gradient accent bar */}
      <div
        className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${
          config.accent
        } rounded-full`}
      />
      <h3 className="text-white text-[18px] font-bold mt-2 mb-5">
        {config.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies[category].map((tech) => (
          <span
            key={tech.name}
            className={`px-3 py-1.5 text-[13px] font-medium rounded-full border ${
              config.badge
            } transition-all duration-300 hover:scale-105 cursor-default`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(technologies).map((category, index) => (
          <TechCategory key={category} category={category} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
