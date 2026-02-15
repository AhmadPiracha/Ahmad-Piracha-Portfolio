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
      className={`fixed top-0 z-20 w-full bg-primary/80 backdrop-blur-md transition-transform duration-300 border-b border-accent-cyan/10 ${styles.paddingX} flex items-center py-5 ${
        hideNavbar ? "-translate-y-full" : ""
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-accent-cyan transition-colors duration-300 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-11 h-11 object-contain group-hover:brightness-125 transition-all duration-300"
          />
          <p className="text-[18px] font-bold text-white cursor-pointer group-hover:text-accent-cyan transition-colors duration-300">
            Ahmad Piracha
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none lg:flex hidden flex-row gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`font-medium text-[16px] transition-all duration-300 relative group pb-2 ${
                  active === link.title
                    ? "text-accent-cyan"
                    : "text-secondary hover:text-white"
                }`}
              >
                {link.title}
                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-violet transition-all duration-300 ${
                    active === link.title ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer hover:brightness-125 transition-all duration-300"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full bg-primary/95 backdrop-blur-lg z-50 transform transition-transform duration-300 lg:hidden ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-accent-cyan/10">
            <h2 className="text-white font-bold text-xl">Menu</h2>
            <img
              src={close}
              alt="close"
              className="w-[24px] h-[24px] object-contain cursor-pointer hover:brightness-125 transition-all duration-300"
              onClick={toggleMenu}
            />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-8 p-8 mt-8">
            <ul className="list-none flex flex-col gap-6">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      toggleMenu();
                      setActive(nav.title);
                    }}
                    className={`font-medium text-[18px] transition-all duration-300 block pb-2 relative group ${
                      active === nav.title
                        ? "text-accent-cyan"
                        : "text-secondary hover:text-white"
                    }`}
                  >
                    {nav.title}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-violet transition-all duration-300 ${
                        active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="border-t border-accent-cyan/10 pt-8">
              <p className="text-secondary text-sm mb-4">Connect with me</p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.facebook.com/ahmadwaseempiracha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
                  title="Facebook"
                >
                  <FaFacebook size={20} className="text-secondary group-hover:text-accent-cyan transition-colors" />
                </a>
                <a
                  href="https://instagram.com/ahmadpiracha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
                  title="Instagram"
                >
                  <FaInstagram size={20} className="text-secondary group-hover:text-accent-cyan transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} className="text-secondary group-hover:text-accent-cyan transition-colors" />
                </a>
                <a
                  href="https://wa.me/923061138468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-black-100/50 hover:bg-accent-cyan/20 transition-all duration-300 group"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={20} className="text-secondary group-hover:text-accent-cyan transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;