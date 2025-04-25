
import { Outlet } from "react-router-dom";
import PreLoader from "../page-sections/pre-loader";
import Header from "../global/header";
import Footer from "../global/footer";
import Aos from "../animation/aos";
const Layout = () => {
  return (
    <>
      <Aos />
      <PreLoader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
