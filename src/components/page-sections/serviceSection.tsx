import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="services section-bg section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title style2 text-center">
              <div className="section-top">
                <h1>
                  <span>Creative</span>
                  <b>Service We Provide</b>
                </h1>
                <h4>We provide quality service &amp; support..</h4>
              </div>
              <div className="section-bottom">
                <div className="text-style-two">
                  <p>
                    Aliquam Sodales Justo Sit Amet Urna Auctor Scelerisquinterdum Leo
                    Anet Tempus Enim Esent Egetis Hendrerit Vel Nibh Vitae Ornar Sem
                    Velit Aliquam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            {
              icon: "fa-solid fa-handshake",
              image: "img/services/service-01.jpg",
              title: "Business Strategy",
              link: "service-business.html",
              description:
                "Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti",
            },
            {
              icon: "fa-brands fa-html5",
              image: "img/services/service-02.jpg",
              title: "Web Development",
              link: "service-develop.html",
              featured: true,
              description:
                "Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti",
            },
            {
              icon: "fa fa-cube",
              image: "img/services/service-03.jpg",
              title: "Market Research",
              link: "service-market.html",
              description:
                "Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti",
            },
          ].map((service, index) => (
            <div className="col-lg-4 col-md-4 col-12" key={index}>
              <div className="single-service">
                <div className="service-head">
                  <div className="icon-bg">
                    <i className={service.icon}></i>
                  </div>
                  {service.featured && <div className="featured">Featured</div>}
                  <img src={service.image} alt="#" />
                </div>
                <div className="service-content">
                  <h4>
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <p>{service.description}</p>
                  <a className="btn" href={service.link}>
                    <i className="fa-solid fa-circle-arrow-right"></i>View Service
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
