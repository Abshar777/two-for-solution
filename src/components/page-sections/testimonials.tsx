import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section
      className="testimonials section-space"
      style={{ backgroundImage: "url('img/testimonial-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-9 col-12">
            <div className="section-title default text-left">
              <div className="section-top">
                <h1><b>Our Satisfied Clients</b></h1>
              </div>
              <div className="section-bottom">
                <div className="text">
                  <p>Some of our great clients and their reviews</p>
                </div>
              </div>
            </div>
            <div className="testimonial-inner">
              <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div className="single-slider" key={index}>
                    <ul className="star-list">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}><i className="fa fa-star"></i></li>
                      ))}
                    </ul>
                    <p>
                      Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <strong>industry's standard</strong> dummy text ever since.
                    </p>
                    <div className="t-info">
                      <div className="t-left">
                        <div className="client-head">
                          <img src={testimonial.image} alt="#" />
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