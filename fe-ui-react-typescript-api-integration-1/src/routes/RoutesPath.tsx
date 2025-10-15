import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "./appRoutes";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import RouteWrapper from "./RouteWrapper";

const routeList = Object.values(APP_ROUTES).map(
  ({ path, element, protected: isProtected, title }) => ({
    path,
    element: (
      <RouteWrapper title={title} isProtected={isProtected}>
        {element}
      </RouteWrapper>
    ),
    errorElement: <ErrorBoundary />,
  })
);

// Add catch-all route for 404
routeList.push({
  path: "*",
  element: <NotFoundPage />,
  errorElement: <ErrorBoundary />,
});

const router = createBrowserRouter(routeList);

const RoutesPath = () => {
  return <RouterProvider router={router} />;
};

export default RoutesPath;
