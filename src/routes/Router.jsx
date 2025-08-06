import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ServicePage from "../pages/ServicePage/ServicePage";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import BlogPage from "../pages/BlogPage/BlogPage";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/service", element: <ServicePage /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:id", element: <BlogDetails /> },
    ],
  },
]);
export default Router;
