import { styles } from "../styles";
import { resume } from "../assets";
import { profile } from "../assets";
const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto flex items-center justify-center bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div
          className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-5 md:gap-5 sm:gap-2 lg:pt-20`}
        >
          {/* Text container */}
          <div className="order-2 lg:order-1 lg:w-1/2 lg:mt-5 lg:pr-5 text-center lg:text-left">
            <div className="flex flex-col justify-center items-center lg:items-start"></div>

            <h1 className={`${styles.heroHeadText} text-white lg:mb-5`}>
              Hi! its <span className="text-[#c6badf]">Ahmad</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              A SOFTWARE ENGINEER
            </p>
            <div className="mt-5 space-x-4">
              <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded">
                <a
                  href={resume}
                  download="Muhammad Ahmad Waseem Piracha-Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume 📝
                </a>
              </button>
              <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </div>

          {/* Image container */}
          <div className="order-1 lg:order-2 lg:w-1/2 lg:mt-0 lg:ml-5 md:w-2/4 sm:w-4/5 sm:mx-auto rounded-full overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-cover object-center w-full h-full rounded-full max-w-sm sm:max-w-full"
                src={profile}
                alt="Ahmad Piracha Profile"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
