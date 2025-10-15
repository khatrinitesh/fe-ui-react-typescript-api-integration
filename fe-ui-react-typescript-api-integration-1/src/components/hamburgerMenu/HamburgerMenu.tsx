import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/path";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <div className="fixed top-4 right-4 z-[60]">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#fff" />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
          onClick={() => setOpen(false)} // Close menu on backdrop click
        >
          <nav
            className="flex flex-col gap-6 text-white text-xl"
            onClick={(e) => e.stopPropagation()} // Prevent nav clicks from closing
          >
            <Link to={ROUTE_PATHS.HOME} onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to={ROUTE_PATHS.ABOUT} onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to={ROUTE_PATHS.PRODUCT_LIST} onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link to={ROUTE_PATHS.CONTACT} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
