import Button from "../Elements/Button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = (props) => {
  const { children } = props;

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="mb-10 lg:mb-0">
        <nav
          className={`flex w-full justify-between items-center fixed top-0 right-0 left-0 py-3 lg:px-20 px-8  z-50  ${
            nav
              ? `flex-col bg-blue-300 animate-slideDown`
              : "bg-white animate-slideUp"
          }`}
        >
          <a href="#">
            <img src="/logo.png" alt="logo" width={60} height={60} />
          </a>
          <div className={`absolute top-3 right-5 md:hidden `}>
            <Button onClick={handleNav}>
              {nav ? <IoCloseSharp size={40} /> : <RxHamburgerMenu size={40} />}
            </Button>
          </div>
          <div
            className={`md:block ${
              nav ? "block animate-slideDown" : "hidden animate-slideUp"
            }`}
          >
            <ul
              className={`flex items-center gap-x-4 mt-2 ${
                nav && `flex-col justify-center mt-5`
              }`}
            >
              <li className="font-semibold text-lg text-center text-slate-700 hover:text-slate-400">
                <a href="#">Home</a>
              </li>
              <li className="font-semibold text-lg text-center text-slate-700 hover:text-slate-400">
                <a href="#about">About</a>
              </li>
              <li className="font-semibold text-lg text-center text-slate-700 hover:text-slate-400">
                <a href="#project">Project</a>
              </li>
              <li className="font-semibold text-lg text-center text-slate-700 hover:text-slate-400">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {children}
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <div className="text-center py-5 mt-4">
      © 2024. Rifqi Febrianto. All rights reserved.
    </div>
  );
};

export default Navbar;
