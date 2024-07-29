import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

const TechStack = () => {
  return (
    <>
      <div className="flex gap-6 mt-4 items-center">
        <FaHtml5
          size={60}
          color="#e44d26"
          className="hover:scale-110 duration-500 cursor-pointer"
        />
        <FaCss3Alt
          size={60}
          color="#2965f1"
          className="hover:scale-110 duration-500 cursor-pointer"
        />
        <IoLogoJavascript
          size={60}
          color="#e5de00"
          className="hover:scale-110 duration-500 cursor-pointer"
        />
        <FaReact
          size={60}
          color="#00a8ff"
          className="hover:scale-110 duration-500 cursor-pointer"
        />
        <RiTailwindCssFill
          size={60}
          color="#38bdf8"
          className="hover:scale-110 duration-500 cursor-pointer"
        />
        <SiPhp
          size={80}
          color="#7A86B8"
          className="hover:scale-110 duration-500 cursor-pointer"
        />
      </div>
    </>
  );
};

export default TechStack;
