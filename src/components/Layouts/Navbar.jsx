import Button from "../Elements/Button";
import IconExample from "../Elements/Button/Icon";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          className={`flex w-full justify-between items-center fixed top-0 right-0 left-0 lg:px-20 px-8 py-2 z-50  ${
            nav ? `flex-col bg-blue-300` : "bg-white"
          }`}
        >
          <h1 className="text-3xl font-bold">Rifqi Febrianto</h1>
          <div className={`absolute top-0 right-5 md:hidden `}>
            <Button onClick={handleNav}>
              <IconExample>
                {nav ? (
                  <IoCloseSharp size={40} />
                ) : (
                  <RxHamburgerMenu size={40} />
                )}
              </IconExample>
            </Button>
          </div>
          <div className={` md:block ${nav ? "block" : "hidden"}`}>
            <ul
              className={`flex gap-4 ${nav && `flex-col justify-center mt-5`}`}
            >
              <li className="font-semibold text-lg text-center">
                <a href="#">Home</a>
              </li>
              <li className="font-semibold text-lg text-center">
                <a href="#about">About</a>
              </li>
              <li className="font-semibold text-lg text-center">
                <a href="#project">Project</a>
              </li>
              <li className="font-semibold text-lg">
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
