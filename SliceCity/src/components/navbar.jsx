import { Link } from "react-scroll";
import { useState } from "react";
import Button from "@components/layouts/Button";
import DarkMode from "@components/layouts/DarkMode";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className=" fixed w-full z-10 py-4 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-slate-100">
      <nav className="container flex flex-row justify-between items-center">
        <div>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <h1 className=" font-bold text-2xl text-secondary">SliceCity</h1>
          </Link>
        </div>
        <nav className=" hidden lg:flex gap-10 text-secondary font-semibold text-xl">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="speciality"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          >
            Speciality
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          >
            Review
          </Link>
        </nav>

        <div className=" flex items-center gap-4">
          <div>
            <DarkMode />
          </div>

        <div className=" hidden md:flex items-center gap-4">
          <Button title="Sign Up" />
        </div>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </nav>
      {/* responsive navigation  */}
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-16 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="speciality"
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Speciality
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Menu
        </Link>
        <Link
          to="review"
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Review
        </Link>

        <div className=" flex justify-center items-center gap-4">
          <Button title="Sign Up" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
