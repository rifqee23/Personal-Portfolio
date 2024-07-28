import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

/**
 * An array of objects representing websites.
 * Each object has the following properties:
 * - image: The URL of the image representing the website.
 * - link: The URL of the website.
 * - name: The name of the website.
 * - desc: A description of the website.
 * - icon: An array of React components representing the tech used in the website.
 */
export const web = [
  {
    // The URL of the image representing the website.
    image: "/images/image.png",
    // The URL of the website.
    link: "https://personal-portfolio-pi-hazel.vercel.app/",
    // The name of the website.
    name: "Personal Portfolio",
    // A description of the website.
    desc: "My personal portfolio",
    // An array of React components representing the tech used in the website.
    icon: [
      <FaReact key={"react"} size={32} className="text-sky-500" />,
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
    ],
  },
  {
    image: "/images/wheelz.jpg",
    link: "/nopublish",
    name: "Wheelz",
    desc: "My personal portfolio",
    icon: [
      <FaHtml5 key={"html"} size={32} className="text-orange-600" />,
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
      <SiPhp key={"php"} size={32} className="text-violet-600" />,
    ],
  },
  {
    image: "/images/wheelzAdmin.jpg",
    link: "/nopublish",
    name: "Wheelz Admin",
    desc: "My personal portfolio",
    icon: [
      <FaHtml5 key={"html"} size={32} className="text-orange-600" />,
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
      <SiPhp key={"php"} size={32} className="text-violet-600" />,
    ],
  },
];
