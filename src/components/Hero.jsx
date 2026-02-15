import { styles } from "../styles";
import { resume } from "../assets";
import { ahmad } from "../assets";
const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto flex items-center justify-center bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-hidden">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black-100/80"></div>

        <div
          className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-10 md:gap-5 sm:gap-2 lg:pt-20 relative z-10`}
        >
          {/* Text container */}
          <div className="order-2 lg:order-1 lg:w-1/2 lg:mt-5 lg:pr-10 text-center lg:text-left">
            <h1 className={`${styles.heroHeadText} text-white lg:mb-5`}>
              Hi! it&apos;s <span className="text-accent-cyan font-bold">Ahmad</span>
            </h1>
            <p className={`${styles.heroSubText} text-accent-cyan mt-2 font-semibold`}>
              A SOFTWARE ENGINEER
            </p>
            <p className="mt-4 text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Creating exceptional digital experiences with modern web technologies. Passionate about building scalable, efficient, and user-friendly applications.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start">
              <a href="#projects" className="group relative px-8 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-violet opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
                <span className="relative z-10">View My Work</span>
              </a>
              <a href="#contact" className="px-8 py-3 text-accent-cyan font-semibold rounded-lg border-2 border-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image container */}
          <div className="order-1 lg:order-2 flex justify-end lg:w-1/2 relative">
            {/* Profile image */}
            <div className="relative w-[350px] h-[350px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-2 border-accent-cyan/50">
              <img
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                src={ahmad}
                alt="Ahmad Piracha Profile"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-secondary text-sm">Scroll to explore</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
