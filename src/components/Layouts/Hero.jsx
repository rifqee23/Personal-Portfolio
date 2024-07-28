import Button from "../Elements/Button";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <div className="w-full lg:h-screen lg:flex lg:justify-center  px-4 lg:px-20">
        <div className="pt-10  lg:flex lg:flex-row-reverse">
          <div className="lg:w-1/2 lg:pt-20 xl:pt-32">
            <div className="flex justify-center mb-10 lg:pl-36">
              <img
                className="rounded-full"
                src="/images/photo.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="lg:w-1/2 lg:pt-20 xl:pt-24">
            <h1 className="text-5xl font-bold text-center lg:text-left ">
              Hi, I'm Rifqi
            </h1>
            <h3 className="text-3xl font-semibold text-center text-gray-600 mt-4 lg:text-left">
              Frontend Developer
            </h3>

            <p className="mt-5 text-md text-center lg:text-left">
              I'm a passionate frontend developer based in Indonesia,
              specializing in creating beautiful and functional web interfaces
              with React, HTML, CSS, and JavaScript. I love transforming ideas
              into engaging user experiences and constantly seek to enhance my
              skills through learning and hands-on projects.{" "}
            </p>
            <div className="w-full mt-10 flex justify-center gap-4 lg:justify-start">
              <Button
                colors="bg-black"
                widths="w-40"
                textColor="text-white"
                hover="hover:bg-zinc-700"
              >
                Get Started
              </Button>
              <Button
                colors="bg-black"
                widths="w-40"
                textColor="text-white"
                hover="hover:bg-zinc-700"
              >
                Download CV
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold">Social Media</h3>
              <div className="flex mt-4 gap-6">
                <a
                  className="hover:scale-110 duration-500"
                  href="http://instagram.com/_qee3i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialInstagram size={40} color="#000" />
                </a>
                <a
                  className="hover:scale-110 duration-500"
                  href="http://www.linkedin.com/in/m-rifqi-febrianto-47b46b255/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={40} color="#000" />
                </a>
                <a
                  className="hover:scale-110 duration-500"
                  href="http://www.facebook.com/profile.php?id=100008287424275&locale=id_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare size={40} color="#000" />
                </a>
                <a
                  className="hover:scale-110 duration-500"
                  href="http://github.com/rifqee23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub size={40} color="#000" />
                </a>
              </div>
            </div>
            <div className="my-8">
              <h1 className="text-3xl font-bold">Tech Stack</h1>
              <div className="flex gap-6 mt-4 items-center">
                <FaHtml5
                  size={40}
                  color="#e44d26"
                  className="hover:scale-110 duration-500 cursor-pointer"
                />
                <FaCss3Alt
                  size={40}
                  color="#2965f1"
                  className="hover:scale-110 duration-500 cursor-pointer"
                />
                <IoLogoJavascript
                  size={40}
                  color="#e5de00"
                  className="hover:scale-110 duration-500 cursor-pointer"
                />
                <FaReact
                  size={40}
                  color="#00a8ff"
                  className="hover:scale-110 duration-500 cursor-pointer"
                />
                <RiTailwindCssFill
                  size={40}
                  color="#38bdf8"
                  className="hover:scale-110 duration-500 cursor-pointer"
                />
                <SiPhp
                  size={50}
                  color="#7A86B8"
                  className="hover:scale-110 duration-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
