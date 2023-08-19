import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Section from "./Section";
import NavbarLink from "./NavbarLink";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const handleClick = () => setNavExpanded((prevState) => !prevState);

  return (
    <Section
      className={
        "fixed bg-white z-10 top-0 left-0 h-20 flex justify-between items-center px-4 text-indigo-500 dark:text-indigo-400 lg:px-8"
      }
    >
      <button
        className="text-2xl sm:text-3xl md:text-4xl hover:text-indigo-700 focus:outline-none focus:text-indigo-700 dark:focus:text-indigo-200 dark:hover:text-indigo-200"
        onClick={toggleDarkMode}
      >
        {darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-base lg:text-xl">
          <li>
            <NavbarLink link={"#home"} text={"Home"} />
          </li>
          <li>
            <NavbarLink link={"#about"} text={"About"} />
          </li>
          <li>
            <NavbarLink link={"#skills"} text={"Skills"} />
          </li>
          <li>
            <NavbarLink link={"#projects"} text={"Projects"} />
          </li>
          <li>
            <NavbarLink link={"#contact"} text={"Contact"} />
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden z-20 cursor-pointer hover:text-indigo-700 dark:hover:text-indigo-200 focus:outline-none focus:text-indigo-700 dark:focus:text-indigo-200"
        onClick={handleClick}
      >
        {navExpanded ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={
          navExpanded
            ? "absolute bg-white top-0 left-0 w-full min-h-screen flex items-center justify-center dark:bg-indigo-950"
            : "hidden"
        }
      >
        <ul className="flex flex-col items-center justify-center gap-6 text-2xl">
          <li>
            <NavbarLink
              link={"#home"}
              text={"Home"}
              onClick={() => setNavExpanded(false)}
            />
          </li>
          <li>
            <NavbarLink
              link={"#about"}
              text={"About"}
              onClick={() => setNavExpanded(false)}
            />
          </li>
          <li>
            <NavbarLink
              link={"#skills"}
              text={"Skills"}
              onClick={() => setNavExpanded(false)}
            />
          </li>
          <li>
            <NavbarLink
              link={"#projects"}
              text={"Projects"}
              onClick={() => setNavExpanded(false)}
            />
          </li>
          <li>
            <NavbarLink
              link={"#contact"}
              text={"Contact"}
              onClick={() => setNavExpanded(false)}
            />
          </li>
        </ul>
      </nav>
    </Section>
  );
};

export default Navbar;
