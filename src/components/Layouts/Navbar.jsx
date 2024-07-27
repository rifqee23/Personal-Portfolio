import Button from "../Elements/Button";
import IconExample from "../Elements/Button/Icon";
import { useState } from "react";

const Navbar = (props) => {
  const { children } = props;

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className={`${nav ? ` bg-blue-300` : ""} px-8 w-full py-2`}>
        <nav
          className={`flex w-full justify-between items-center ${
            nav && "flex-col"
          }`}
        >
          <h1 className="text-3xl font-bold">Rifqi Febrianto</h1>
          <div className={`absolute top-0 right-10 md:hidden `}>
            <Button onClick={handleNav}>
              <IconExample />
            </Button>
          </div>
          <div className={` md:block ${nav ? "block" : "hidden"}`}>
            <ul
              className={`flex gap-4 ${nav && `flex-col justify-center mt-5`}`}
            >
              <li className="font-semibold text-lg text-center">Home</li>
              <li className="font-semibold text-lg text-center">About</li>
              <li className="font-semibold text-lg">Contact</li>
            </ul>
          </div>
        </nav>
      </div>

      {children}
    </>
  );
};

export default Navbar;
