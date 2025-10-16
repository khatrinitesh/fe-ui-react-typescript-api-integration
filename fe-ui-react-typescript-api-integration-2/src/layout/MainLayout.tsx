import Footer from "../components/Footer";
import Header from "../components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="appLayout h-dvh grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="h-dvh flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
