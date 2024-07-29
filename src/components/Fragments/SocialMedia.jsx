import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <>
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
    </>
  );
};
export default SocialMedia;
