import { styles } from "../styles";
import { resume } from "../assets";
import { ahmad } from "../assets";
const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto flex items-center justify-center bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div
          className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-10 md:gap-5 sm:gap-2 lg:pt-20`}
        >
          {/* Text container */}
          <div className="order-2 lg:order-1 lg:w-1/2 lg:mt-5 lg:pr-10 text-center lg:text-left">
            <h1 className={`${styles.heroHeadText} text-white lg:mb-5`}>
              Hi! it&apos;s <span className="text-[#c6badf]">Ahmad</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              A SOFTWARE ENGINEER
            </p>
            <div className="mt-5 space-x-4">
              <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded">
                <a href={resume} target="_blank" rel="noreferrer">
                  Resume 📝
                </a>
              </button>
{/*               <button className="bg-white text-blue-500 font-bold py-2 px-5 rounded">
                <a
                  href="https://www.upwork.com/freelancers/ahmadwaseemp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hire Me
                </a>
              </button> */}
            </div>
          </div>

          {/* Image container */}
          <div className="order-1 lg:order-2 flex justify-end lg:w-1/2">
            <div className="w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full max-w-sm sm:max-w-full"
                src={ahmad}
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
