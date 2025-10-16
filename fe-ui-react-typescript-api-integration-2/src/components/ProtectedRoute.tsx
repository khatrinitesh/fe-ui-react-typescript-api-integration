// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

/**
 * A wrapper for protected pages that requires authentication.
 * If the user is not logged in, redirects to the home page (or login page).
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect unauthenticated users to the home page (or login)
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Authenticated users can access the route
  return element;
};

export default ProtectedRoute;
