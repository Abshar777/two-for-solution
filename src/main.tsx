import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../public/css/animate.min.css";
import "../public/css/bootstrap.min.css";
import "../public/css/cubeportfolio.min.css";
import "../public/css/font-awesome.min.css";
import "../public/css/jquery.fancybox.min.css";
import "../public/css/magnific-popup.min.css";
import "../public/css/owl-carousel.min.css";
import "../public/css/slicknav.min.css";
import "../public/css/reset.css";
import "../public/css/responsive2.css";

import "../public/js/active";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
