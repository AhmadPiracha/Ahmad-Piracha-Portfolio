import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const SCROLL_THRESHOLD = 50; 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideNavbar(currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav
    className={`fixed top-0 z-20 w-full bg-primary transition-transform duration-300 ${styles.paddingX} flex items-center py-5 ${
      hideNavbar ? "-translate-y-full" : ""
    }`}
  >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img
          src={logo}
          alt="logo"
          className="w-11 h-11 object-contain"
        />
        <p className="text-[18px] font-bold text-white cursor-pointer">
          Ahmad Piracha
        </p>
      </Link>

      <ul className="list-none lg:flex hidden flex-row gap-6">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } hover:text-white font-medium text-[18px] cursor-pointer`}
            onClick={() => {
              setActive(link.title);
              window.scrollTo(0, 0);
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[28px] object-contain cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full bg-primary bg-opacity-90 z-50 transform transition-transform ${
          toggle ? "translate-x-0" : "translate-x-full"
        } sm:block ${toggle ? "block" : "hidden"} lg:hidden`}
      >
          <div className="lg:hidden flex items-center fixed top-7 right-7">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[20px] h-[28px] object-contain cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="w-full p-4">
              <ul className="list-none flex flex-col gap-6 items-center lg:hidden justify-center">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[18px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      toggleMenu();
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              {/* Social media links */}
              <div className="flex gap-4 mt-10 justify-center">
                <div className="icon-container group relative">
                  <a
                    href="https://www.facebook.com/ahmadwaseempiracha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
                    Facebook
                  </p>
                </div>
                <div className="icon-container group relative">
                  <a
                    href="https://instagram.com/ahmadpiracha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
                    Instagram
                  </p>
                </div>
                <div className="icon-container group relative">
                  <a
                    href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
                    LinkedIn
                  </p>
                </div>
                <div className="icon-container group relative">
                  <a
                    href="https://wa.me/923061138468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                  <p className="opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded py-1 px-2 absolute top-[-30px] left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
                    WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;