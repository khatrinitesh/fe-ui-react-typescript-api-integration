import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

interface Props {
  children: React.ReactElement;
  title: string;
  isProtected?: boolean;
}

const RouteWrapper = ({ children, title, isProtected = false }: Props) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title, location.pathname]);

  return isProtected ? <ProtectedRoute>{children}</ProtectedRoute> : children;
};

export default RouteWrapper;
