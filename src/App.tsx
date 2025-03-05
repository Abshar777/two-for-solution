import Header from "./components/global/header";
import PreLoader from "./components/page-sections/pre-loader";
import HeroSlider from "./components/page-sections/her-slider";
import FeaturesArea from "./components/page-sections/feature";
import VideoFeature from "./components/page-sections/videoFeatures";
import ServicesSection from "./components/page-sections/serviceSection";
import CallAction from "./components/page-sections/callAction";
import Testimonials from "./components/page-sections/testimonials";
import CounterUp from "./components/page-sections/counterUp";
import TeamSection from "./components/page-sections/team";
import BlogSection from "./components/page-sections/blog";
import ClientArea from "./components/page-sections/clientArea";
import Footer from "./components/global/footer";

function App() {
  return (
    <>
      <PreLoader />
      <Header />
      <HeroSlider />
      <FeaturesArea />
      <VideoFeature />
      <ServicesSection />
      <CallAction/>
      <Testimonials/>
      <CounterUp/>
      <TeamSection/>
      <BlogSection/>
      <ClientArea/>
      <Footer/>
    </>
  );
}

export default App;
