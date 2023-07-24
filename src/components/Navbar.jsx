import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
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
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-[18px] font-bold text-white cursor-pointe flex">
            Ahmad Piracha
          </p>
        </Link>

        <ul className="list-none lg:flex hidden flex-row gap-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
              hover:text-white font-medium text-[18px] cursor-pointer
              `}
              onClick={() => {
                setActive(link.title);
                window.scrollTo(0, 0);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* TOGGLE BUTTON AND MENU FOR MOBILE DEVICES */}
        <div className="lg:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[28px] object-contain cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Side Menu */}
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
              <ul className="list-none flex flex-col gap-4 items-center lg:hidden justify-center">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
