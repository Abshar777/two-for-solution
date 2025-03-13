import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="w-full h-full p-2">
        <section
      className="testimonials section-space"
      style={{ backgroundImage: "url('img/testimonial-bg.jpg')", borderRadius:"20px" }}
    >
      <div className="container">
        <div className="row">
          <div style={{borderRadius:"20px"}} className="col-lg-6 col-md-9 col-12">
            <div style={{borderRadius:"20px"}} className="section-title default text-left">
              <div style={{borderRadius:"20px"}} className="section-top">
                <h1><b>Our Satisfied Clients</b></h1>
              </div>
              <div style={{borderRadius:"20px"}} className="section-bottom">
                <div className="text">
                  <p>Some of our great clients and their reviews</p>
                </div>
              </div>
            </div>
            <div className="testimonial-inner">
              <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div style={{borderRadius:"20px"}} className="single-slider" key={index}>
                    <ul className="star-list">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}><i className="fa fa-star"></i></li>
                      ))}
                    </ul>
                    <p>
                      Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <strong>industry's standard</strong> dummy text ever since.
                    </p>
                    <div className="t-info">
                      <div style={{borderRadius:"20px"}} className="t-left">
                        <div style={{borderRadius:"20px"}} className="client-head">
                          <img style={{borderRadius:"20px"}} src={testimonial.image} alt="#" />
                        </div>
                        <h2>
                          {testimonial.name} <span>{testimonial.position}</span>
                        </h2>
                      </div>
                      <div className="t-right">
                        <div className="quote">
                          <i className="fa fa-quote-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

const testimonials = [
  {
    name: "Julias Dien",
    position: "CEO / Creative IT",
    image: "img/testi1.png",
  },
  {
    name: "Buman Panama",
    position: "Founder, Jolace Group",
    image: "img/testi2.png",
  },
  {
    name: "Donald Bonam",
    position: "Developer, Soft IT",
    image: "img/testi1.png",
  },
];

export default Testimonials;