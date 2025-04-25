import Breadcrumbs from "../components/page-sections/about/breadCrump"
import ServicesSection2 from "../components/page-sections/ourServices/services2"
import CallAction2 from "../components/page-sections/callAction2"
const OurServices = () => {
  return (
    <>
      <Breadcrumbs title="Our Services" breadcrumb={[
        {link: "/", title: "Home"},
        {link: "our-services", title: "Our Services"},
      ]} />
      <ServicesSection2 />
      <CallAction2 />
    </>
  )
}

export default OurServices
