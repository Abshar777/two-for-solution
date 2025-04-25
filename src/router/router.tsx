import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about";
import OurServices from "../pages/ourServices";
import ContactUs from "../pages/contactUs";
import Gallery from "../pages/gallery";
import ProjectManagement from "../pages/projectmangement";
import OilFieldChemicals from "../pages/oil";
import GeneralTrading from "../pages/generalTrading";
import ErrorPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/our-services",
        element: <OurServices />,
      },
      {
        path: "/our-services/project-management",
        element: <ProjectManagement />,
      },
        {
        path: "/our-services/oil-field-chemicals",
        element: <OilFieldChemicals />,
      },
      {
        path: "/our-services/general-trading",
        element: <GeneralTrading />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
        {
          path: "*",
          element: <ErrorPage />,
        },
    ],
  },
]);

export default router;
