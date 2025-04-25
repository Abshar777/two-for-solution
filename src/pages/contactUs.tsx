import Breadcrumbs from "../components/page-sections/about/breadCrump"
import Contact from "../components/page-sections/contactUs/contact"
const ContactUs = () => {
  return (
    <>
      <Breadcrumbs title="Contact Us" breadcrumb={[
        {link: "/", title: "Home"},
        {link: "contact-us", title: "Contact Us"},
      ]} />
      <Contact />
    </>
  )
}

export default ContactUs
