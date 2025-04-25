import Breadcrumbs from "../components/page-sections/about/breadCrump"
import CallAction2 from '../components/page-sections/callAction2'
import SingleService from "../components/page-sections/ourServices/[id]/singleService"
import { services } from "../constants/whyChoosUs"

const GeneralTrading = () => {
  return (
    <>
    <Breadcrumbs title="Oil Field Chemicals" breadcrumb={[
      {link: "/", title: "Home"},
      {link: "our-services", title: "Our Services"},
      {link: "general-trading", title: "General Trading"},
    ]} />
    <SingleService service={services[2]} />
    <CallAction2/>
  </>
  )
}

export default GeneralTrading
