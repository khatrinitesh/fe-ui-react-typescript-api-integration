import type { ILayoutProps } from "../interface";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="appLayout grid h-dvh grid-rows-[auto_1fr_auto] ">
      <Header />
      <div className="mainContent flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
