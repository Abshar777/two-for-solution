import HeroSlider from "../components/page-sections/her-slider";
import FeaturesArea from "../components/page-sections/feature";
import VideoFeature from "../components/page-sections/videoFeatures";
import ServicesSection from "../components/page-sections/serviceSection";
import CallAction from "../components/page-sections/callAction";
import Testimonials from "../components/page-sections/testimonials";
import BlogSection from "../components/page-sections/blog";
import CallAction2 from "../components/page-sections/callAction2";

const Home = () => {
  return (
    <>
  
      <HeroSlider />
      <FeaturesArea />
      <VideoFeature />
      <ServicesSection />
      <CallAction/>
      <BlogSection />
      <Testimonials/>
      <CallAction2/>

    </>
  );
}

export default Home;
