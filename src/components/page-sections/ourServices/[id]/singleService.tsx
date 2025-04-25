import { useLocation } from "react-router-dom";
import { ourServices } from "../../../../constants/header";

interface ServiceSingleProps {
  service: {
    id: string;
    title: string;
    list: string[];
    listWithSubList?: {
      title: string;
      list: string[];
    }[];
    description1: string;
    description2?: string;
    description3?: string;
    image?: string;
  };
}

const ServiceSingle = ({ service }: ServiceSingleProps) => {
  // get the current path name
  const pathname = useLocation().pathname;

  return (
    <section className="service-single section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            {/* Service Image */}
            <div className="service-img">
              <img
                style={{ borderRadius: "20px" }}
                src="/img/services/service-single.jpg"
                alt="#"
              />
            </div>

            {/* Service Content */}
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description1}</p>
              <ol style={{ listStyleType: "disc" }}>
                {service.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              {service.listWithSubList &&
                service.listWithSubList.map((item, index) => (
                  <ol style={{ listStyleType: "disc" }}>
                    <p style={{ fontWeight: "bold" }} key={index}>{item.title}</p>
                    {item.list.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ol>
                ))}

              <p>{service.description2}</p>

              <p>{service.description3}</p>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            {/* Service Sidebar */}
            <div style={{ borderRadius: "20px" }} className="service-sidebar">
              {/* Single Sidebar */}
              <div
                style={{ borderRadius: "20px" }}
                className="service-single-sidebar widget"
              >
                <h2 className="widget-title">Service Menu</h2>
                <div className="menu-service-menu-container">
                  {/* Service Menu */}
                  <ul id="menu-service-menu" className="menu">
                    {ourServices.map((item, index) => (
                      <li
                        style={{
                          color: pathname === item.link ? "#00AA45" : "",
                        }}
                        key={index}
                      >
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Single Sidebar */}
              <div
                style={{ borderRadius: "20px" }}
                className="service-single-sidebar widget"
              >
                <h2 className="widget-title">Fill the form</h2>
                <div className="contact-form-area service">
                  {/* Service Form */}
                  <form className="form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <div className="icon">
                            <i className="fa fa-user"></i>
                          </div>
                          <input
                            style={{ borderRadius: "20px" }}
                            type="text"
                            name="user-name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="icon">
                            <i className="fa fa-envelope"></i>
                          </div>
                          <input
                            style={{ borderRadius: "20px" }}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="icon">
                            <i className="fa fa-tag"></i>
                          </div>
                          <input
                            style={{ borderRadius: "20px" }}
                            type="text"
                            name="subject"
                            placeholder="Type Subject"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="icon">
                            <i className="fa fa-pencil"></i>
                          </div>
                          <textarea
                            style={{ borderRadius: "20px" }}
                            rows={5}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button
                            style={{ borderRadius: "20px" }}
                            type="submit"
                            className="bizwheel-btn theme-2"
                          >
                            Send Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/*/ End Service Form */}
                </div>
              </div>
            </div>
            {/*/ End Service Sidebar */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSingle;
