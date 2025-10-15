import { Link, useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../routes/path";
import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTE_PATHS.HOME;
  const headLogo = isHome ? "headTitle1" : "headTitle2";

  const getLinkClassName = (path: string) => {
    return pathname === path ? "text-white font-bold" : "text-white";
  };

  return (
    <header className="bg-black py-[20px]">
      <div className="container">
        <div className="innerHeader flex items-center justify-between">
          <div className="logo text-white">{headLogo}</div>
          {/* desktop nav */}
          <nav className="gap-[10px] hidden md:inline-flex">
            <Link
              to={ROUTE_PATHS.HOME}
              className={getLinkClassName(ROUTE_PATHS.HOME)}
            >
              Home
            </Link>
            <Link
              to={ROUTE_PATHS.ABOUT}
              className={getLinkClassName(ROUTE_PATHS.ABOUT)}
            >
              About
            </Link>
            <Link
              to={ROUTE_PATHS.PRODUCT_LIST}
              className={getLinkClassName(ROUTE_PATHS.PRODUCT_LIST)}
            >
              Products
            </Link>
            <Link
              to={ROUTE_PATHS.CONTACT}
              className={getLinkClassName(ROUTE_PATHS.CONTACT)}
            >
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
