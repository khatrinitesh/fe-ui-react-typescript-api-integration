import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        aria-label="Facebook"
        className="text-white hover:text-blue-500 transition-colors"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        aria-label="LinkedIn"
        className="text-white  hover:text-blue-400 transition-colors"
      >
        <FaLinkedinIn size={20} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        aria-label="YouTube"
        className="text-white  hover:text-red-500 transition-colors"
      >
        <FaYoutube size={20} />
      </a>
    </div>
  );
};

export default SocialMedia;
