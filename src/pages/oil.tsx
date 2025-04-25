import Breadcrumbs from '../components/page-sections/about/breadCrump';
import SingleService from '../components/page-sections/ourServices/[id]/singleService';
import { services } from '../constants/whyChoosUs';
import CallAction2 from '../components/page-sections/callAction2';

const OilFieldChemicals = () => {
  return (
    <>
    <Breadcrumbs title="Oil Field Chemicals" breadcrumb={[
      {link: "/", title: "Home"},
      {link: "our-services", title: "Our Services"},
      {link: "oil-field-chemicals", title: "Oil Field Chemicals"},
    ]} />
    <SingleService service={services[1]} />
    <CallAction2/>
  </>
  )
}

export default OilFieldChemicals;
