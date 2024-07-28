import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div>
          <h1 className="text-8xl font-bold text-center mb-10">404</h1>
          <h1 className="text-2xl font-bold">Oops!</h1>
          <p className="text-xl font-semibold">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-lg font-semibold">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    );
  }
};

export default ErrorPage;
