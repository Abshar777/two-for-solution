import React from "react";
import img from "../../../public/img/why-choose.jpg";

const VideoFeature: React.FC = () => {
  return (
    <section className="video-feature side overlay ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="img-feature">
              <img src={img} alt="Video Thumbnail" />
              <div className="video-play">
                <a
                  href="https://www.youtube.com/watch?v=RLlPLqrw8Q4"
                  className="video video-popup mfp-iframe"
                >
                  <i className="fa fa-play"></i>
                </a>
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
              <span>Watch 2 minutes</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="features-main">
              <div className="title">
                <h2>Our Best Features</h2>
                <p>
                  Our studio is not just about graphic design; it’s more than
                  that. We offer communication services, and we’re responsible
                </p>
              </div>
              <div className="b-features">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-list-feature">
                      <i className="fa fa-code"></i>
                      <h4>Web Development</h4>
                      <p>
                        Molitia modi quae labori osam nemo minimaafb services
                        dafeandable
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-list-feature">
                      <i className="fa-brands fa-html5"></i>
                      <h4>Creative Design</h4>
                      <p>
                        Molitia modi quae labori osam nemo minimaafb services
                        dafeandable
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-list-feature">
                      <i className="fa-solid fa-newspaper"></i>
                      <h4>Quality Service</h4>
                      <p>
                        Molitia modi quae labori osam nemo minimaafb services
                        dafeandable
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-list-feature">
                      <i className="fa fa-coffee"></i>
                      <h4>Without Hassle</h4>
                      <p>
                        Molitia modi quae labori osam nemo minimaafb services
                        dafeandable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-btn">
                <a href="contact.html" className="bizwheel-btn theme-2">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFeature;
