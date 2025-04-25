

const WhatWeDo: React.FC = () => {
  return (
    <section className="about-us section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
            <div className="about-content section-title default text-left">
              <div className="section-top">
                <h1 data-aos="fade-up">
                  <span>what we do </span>
                  <b>what we do</b>
                </h1>
              </div>
              <div className="section-bottom">
                <div className="text">
                  <p data-aos="fade-up">
                    TWO FOUR SOLUTION FZ LLC (TFS UAE), ISO 9001:2015 certified
                    and based in Ras Al Khaimah, offers over 18 years of
                    industry expertise. Founded in 2024, we deliver agile,
                    cost-effective solutions through a holistic, structured
                    approach.
                  </p>
                  <ol
                    data-aos="fade-up"
                    style={{
                      paddingBottom: "1.2em",

                      listStyleType: "disc",
                        textAlign: "left",
                    }}
                  >
                    <li>
                      Turnkey Solutions: End-to-end project execution including
                      planning, procurement, implementation, and after-sales
                      support.
                    </li>
                    <li>
                      Sector-specific Expertise: Solutions tailored for oil &
                      gas, industrial manufacturing, construction, and general
                      trade.
                    </li>
                    <li>
                      Sustainable Practices: Environmentally conscious
                      strategies that balance performance with safety and
                      compliance.
                    </li>
                    <li>
                      Innovative Product Development: Custom-built products
                      designed to meet industry-specific standards and
                      performance metrics.
                    </li>
                  </ol>
                 
                </div>
                <div style={{ borderRadius: "20px" }} className="button">
                  <a
                    data-aos="fade-up"
                    style={{ borderRadius: "25px" }}
                    href="about.html"
                    className="bizwheel-btn theme-2"
                  >
                    Learn More<i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
            {/* About Video */}
            <div data-aos="fade-up" className="modern-img-feature2">
              <img
                style={{ borderRadius: "20px" }}
                src="img/about-us.jpg"
                alt="#"
              />
              <div className="video-play">
                <a
                  href="https://www.youtube.com/watch?v=RLlPLqrw8Q4"
                  className="video video-popup mfp-iframe"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            {/* /End About Video */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
