// src/routes/AppRoutes.tsx
import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Path } from "./Path";
import MainLayout from "../layout/MainLayout";
import Preloader from "../components/preloader/Preloader";
import { ErrorBoundary } from "../components/ErrorBoundary";
import ProtectedRoute from "../components/ProtectedRoute";

// Lazy imports
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Services = lazy(() => import("../pages/Services"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const NotFound = lazy(() => import("../pages/NotFound"));

interface AppRoute {
  path: string;
  element: React.ReactElement;
  title: string;
  protected?: boolean;
  layout?: boolean; // true = use MainLayout
}

const routes: AppRoute[] = [
  { path: Path.HOME, element: <Home />, title: "Home", layout: true },
  { path: Path.ABOUT, element: <About />, title: "About", layout: true },
  { path: Path.CONTACT, element: <Contact />, title: "Contact", layout: true },
  {
    path: Path.SERVICES,
    element: <Services />,
    title: "Services",
    layout: true,
  },
  {
    path: Path.DASHBOARD,
    element: <Dashboard />,
    title: "Dashboard",
    protected: true,
    layout: true,
  },
  {
    path: Path.NOT_FOUND,
    element: <NotFound />,
    title: "Not Found",
    layout: false,
  },
];

const AppRoutes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const current = routes.find((r) => r.path === location.pathname);
    document.title = current ? `${current.title} | MyApp` : "MyApp";
  }, [location]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <Routes>
          {routes.map(({ path, element, protected: isProtected, layout }) => {
            const content = isProtected ? (
              <ProtectedRoute element={element} />
            ) : (
              element
            );

            const pageElement = layout ? (
              <MainLayout>{content}</MainLayout>
            ) : (
              content
            );

            return <Route key={path} path={path} element={pageElement} />;
          })}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
