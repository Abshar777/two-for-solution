 
import Breadcrumbs from '../components/page-sections/about/breadCrump'
import CallAction2 from '../components/page-sections/callAction2'
const Gallery = () => {
  return (
    <>
      <Breadcrumbs title="Gallery" breadcrumb={[
        {link: "/", title: "Home"},
        {link: "gallery", title: "Gallery"},
      ]} />
      <CallAction2/>
    </>
  )
}

export default Gallery
