import Breadcrumbs from '../components/page-sections/about/breadCrump';
import SingleService from '../components/page-sections/ourServices/[id]/singleService';
import { services } from '../constants/whyChoosUs';
import CallAction2 from '../components/page-sections/callAction2';
const ProjectManagement = () => {
  return (
    <>
      <Breadcrumbs title="Project Management" breadcrumb={[
        {link: "/", title: "Home"},
        {link: "our-services", title: "Our Services"},
        {link: "project-management", title: "Project Management"},
      ]} />
      <SingleService service={services[0]} />
      <CallAction2/>
    </>
  )
}

export default ProjectManagement;
