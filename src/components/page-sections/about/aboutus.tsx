

const AboutUs: React.FC = () => {
  return (
    <section className="about-us section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
            {/* About Video */}
            <div data-aos="fade-up" className="modern-img-feature">
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
          <div className="col-lg-5 col-md-6 col-12">
            <div className="about-content section-title default text-left">
              <div className="section-top">
                <h1 data-aos="fade-up">
                  <span>About Us</span>
                  <b>Quality Business & Smart Solutions</b>
                </h1>
              </div>
              <div className="section-bottom">
                <div className="text">
                  <p data-aos="fade-up">
                    TWO FOUR SOLUTION FZ LLC (TFS UAE) is an ISO 9001:2015
                    certified company based in Ras Al Khaimah, UAE. Founded in
                    2024, our team brings over 18 years of experience across
                    multiple industries.
                  </p>
                  <ul
                    data-aos="fade-up"
                    style={{
                      paddingBottom: "1.2em",
                      
                      listStyleType: "disc",
                    //   textAlign: "left",
                    }}
                  >
                    <li>Oilfield Chemicals</li>
                    <li>Project & Operations Management</li>
                    <li>General Trading</li>
                  </ul>
                  <p style={{marginLeft:"1rem "}} data-aos="fade-up">
                    We focus on innovation, quality, and client-first service to
                    deliver scalable solutions for regional and global markets.
                  </p>
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
