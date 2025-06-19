import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";



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
    link: "https://github.com/rifqee23/Wheelz-Collaboration",
    name: "Wheelz",
    icon: [
      <FaHtml5 key={"html"} size={32} className="text-orange-600" />,
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
      <SiPhp key={"php"} size={32} className="text-violet-600" />,
    ],
  },
  {
    image: "/images/wheelzAdmin.jpg",
    link: "https://github.com/rifqee23/Wheelz-Admin",
    name: "Wheelz Admin",
    icon: [
      <FaHtml5 key={"html"} size={32} className="text-orange-600" />,
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
      <SiPhp key={"php"} size={32} className="text-violet-600" />,
    ],
  },
  {
    image: "/images/minGym.png",
    link: "https://github.com/rifqee23/Mingym-Admin",
    name: "MinGym",
    icon: [
      <FaHtml5 key={"html"} size={32} className="text-orange-600" />,
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
      <SiPhp key={"php"} size={32} className="text-violet-600" />,
    ],
  },
  {
    image: "/images/cssunila.png",
    link: "https://www.cssunila.com/",
    name : "CSS Unila",
    icon: [
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
      <RiNextjsFill key={"nextjs"} size={32} />,

    ]
  },
  {
    image: "/images/z4in.png",
    link: "https://supply-chain-frontend-245g.vercel.app/",
    name : "Z4IN - Supply-Chain",
    icon: [
      <RiTailwindCssFill key={"tailwind"} size={32} className="text-sky-500" />,
      <FaReact key={"react"} size={32} className="text-sky-500" />,
      <SiExpress key={"express"} size={32} />

    ]
  }
];
