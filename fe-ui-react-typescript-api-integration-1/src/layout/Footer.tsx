import SocialMedia from "../components/socialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-black py-[20px]">
      <div className="container ">
        <div className="innerFooter flex items-center justify-between">
          <p className="text-white">
            © {new Date().getFullYear()} My Awesome Store
          </p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
