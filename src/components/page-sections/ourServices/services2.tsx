
import { serviceWeProvide2 } from "../../../constants/serviceWeProvide";

const ServicesSection: React.FC = () => {
  const animation = ["fade-up", "fade-down", "fade-left", "fade-right"];
  return (
    <section data-aos="fade-up" className="services section-bg section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title style2 text-center">
              <div className="section-top">
                <h1 data-aos="fade-up">
                  <span>Services</span>
                  <b>Services We Provide</b>
                </h1>
                <h4 data-aos="fade-up">
                  We provide quality service &amp; support..
                </h4>
              </div>
              <div className="section-bottom">
                <div className="text-style-two">
                  <p data-aos="fade-up">
                    At Two Four Solutions, we offer an extensive range of
                    professional services designed to support your business at
                    every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceWeProvide2.map((service, index) => (
            <div
              data-aos={animation[0]}
              data-aos-delay={index * 100}
              style={{ borderRadius: "20px" }}
              className="col-lg-6 col-md-6 col-12"
              key={index}
            >
              <div style={{ borderRadius: "20px" }} className="single-service">
                <div className="service-head p-2">
                  <div
                    style={{ borderRadius: "20px" }}
                    className="icon-bg translate-x-2 -translate-y-2"
                  >
                    <i
                      style={{ borderRadius: "20px" }}
                      className={service.icon}
                    ></i>
                  </div>

                  <img
                    style={{ borderRadius: "20px" }}
                    src={service.image}
                    alt="#"
                  />
                </div>
                <div className="service-content">
                  <h4>
                    <a href="#">{service.title}</a>
                  </h4>
                  <p>{service.description}</p>
                  <a className="btn" href="#">
                    <i className={service.icon}></i>View Service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
