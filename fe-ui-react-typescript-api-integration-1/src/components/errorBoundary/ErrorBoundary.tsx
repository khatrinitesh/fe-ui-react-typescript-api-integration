import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <h2>404 - Page Not Found</h2>;
    }

    return (
      <div>
        <h2>
          {error.status} - {error.statusText}
        </h2>
        <p>{error.data?.message || "An unexpected error occurred."}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Unexpected Error</h2>
      <p>{(error as Error)?.message || "Something went wrong."}</p>
    </div>
  );
};

export default ErrorBoundary;
