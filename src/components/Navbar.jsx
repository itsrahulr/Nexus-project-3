import React from "react";
import logo from "/src/images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-2 bg-white sm:pt-5">
      <img src={logo} alt="" />

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-white text-black hover:text-white font-gs"
          >
            Menu
          </div>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="hidden sm:flex gap-5 font-gs text-base font-normal">
        <a className="hover:underline" href="#about">
          About
        </a>
        <a className="hover:underline" href="#services">
          Services
        </a>
        <a className="hover:underline" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
