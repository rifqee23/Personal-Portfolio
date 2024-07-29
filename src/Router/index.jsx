import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/404.jsx";
import NoPublishPage from "../Pages/NoPublishPage.jsx";
import App from "../App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nopublish",
    element: <NoPublishPage />,
  },
]);
