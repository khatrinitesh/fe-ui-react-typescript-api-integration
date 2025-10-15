import { Link, useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../routes/path";
import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTE_PATHS.HOME;
  const headLogo = isHome ? "headTitle1" : "headTitle2";

  return (
    <header className="bg-black py-[20px]">
      <div className="container">
        <div className="innerHeader flex items-center justify-between">
          <div className="logo text-white">{headLogo}</div>
          {/* desktop nav */}
          <nav className="gap-[10px] hidden md:inline-flex">
            <Link to={ROUTE_PATHS.HOME} className="text-white">
              Home
            </Link>
            <Link to={ROUTE_PATHS.ABOUT} className="text-white">
              About
            </Link>
            <Link to={ROUTE_PATHS.PRODUCT_LIST} className="text-white">
              Products
            </Link>
            <Link to={ROUTE_PATHS.CONTACT} className="text-white">
              Contact
            </Link>
          </nav>
          {/* Mobile Hamburger Menu */}
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
