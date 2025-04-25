import Breadcrumbs from "../components/page-sections/about/breadCrump";
import AboutUs from "../components/page-sections/about/aboutus";
import FeaturesArea from "../components/page-sections/feature";
import WhatWeDo from "../components/page-sections/about/whatWeDo";
import ServiceComitment from "../components/page-sections/about/serviceComitment";
import BlogSection from "../components/page-sections/blog";
import CallAction2 from "../components/page-sections/callAction2";
const About = () => {
  return (
    <>
      <Breadcrumbs
        title="About Us"
        breadcrumb={[
          { link: "about", title: "About Us" },
          { link: "/", title: "Home" },
        ]}
      />
      <AboutUs />
      <ServiceComitment />
      <WhatWeDo />
      <FeaturesArea />
      <BlogSection />
      <CallAction2 />
    </>
  );
};

export default About;
