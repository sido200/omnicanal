import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ServicePage from "../pages/ServicePage/ServicePage";
import Portfolio from "../pages/Portfolio/Portfolio";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/service", element: <ServicePage /> },
      { path: "/portfolio", element: <Portfolio /> },
    ],
  },
]);
export default Router;
