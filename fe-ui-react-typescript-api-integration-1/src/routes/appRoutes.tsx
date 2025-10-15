import { Suspense, type JSX } from "react";
import type { RouteItem } from "../interface";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import HomePage from "../pages/homePage/HomePage";
import ProductDetailPage from "../pages/productDetailPage/ProductDetailPage";
import ProductListPage from "../pages/productListPage/ProductListPage";
import { ROUTE_PATHS } from "./path";
import Preloader from "../components/preloader/Preloader";
import MainLayout from "../layout/MainLayout";

// Suspense wrapper
const withSuspense = (component: JSX.Element) => (
  <Suspense fallback={<Preloader />}>{component}</Suspense>
);

export const APP_ROUTES: Record<keyof typeof ROUTE_PATHS, RouteItem> = {
  HOME: {
    path: ROUTE_PATHS.HOME,
    element: withSuspense(
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
    protected: false,
    title: "Home",
  },
  ABOUT: {
    path: ROUTE_PATHS.ABOUT,
    element: withSuspense(
      <MainLayout>
        <AboutPage />
      </MainLayout>
    ),
    protected: false,
    title: "About",
  },
  CONTACT: {
    path: ROUTE_PATHS.CONTACT,
    element: withSuspense(
      <MainLayout>
        <ContactPage />
      </MainLayout>
    ),
    protected: false,
    title: "Contact",
  },
  PRODUCT_LIST: {
    path: ROUTE_PATHS.PRODUCT_LIST,
    element: withSuspense(
      <MainLayout>
        <ProductListPage />
      </MainLayout>
    ),
    protected: false,
    title: "Products List",
  },
  PRODUCT_DETAIL: {
    path: ROUTE_PATHS.PRODUCT_DETAIL,
    element: withSuspense(
      <MainLayout>
        <ProductDetailPage />
      </MainLayout>
    ),
    protected: false,
    title: "Products Detail",
  },
};
