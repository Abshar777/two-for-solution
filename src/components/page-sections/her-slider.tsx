import React from "react";

const HeroSlider: React.FC = () => {
  return (
    <section className="hero-slider style1">
      <div className="home-slider">
        {/* Single Slider */}
        <div
          className="single-slider"
          style={{ backgroundImage: "url('img/slider-image/slider-image1.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-12">
                <div className="welcome-text">
                  <div className="hero-text">
                    <h4>We are always ready to help you</h4>
                    <h1>Our Creative Designer Waiting for Projects</h1>
                    <div className="p-text">
                      <p>
                        Nunc tincidunt venenatis elit. Etiam venenatis quam vel maximus bibendum
                        Pellentesque elementum dapibus diam tristique
                      </p>
                    </div>
                    <div className="button">
                      <a href="contact.html" className="bizwheel-btn theme-1 effect">
                        Work with us
                      </a>
                      <a href="portfolio.html" className="bizwheel-btn theme-2 effect">
                        View Our Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
        {/* Single Slider */}
        <div
          className="single-slider"
          style={{ backgroundImage: "url('img/slider-image/slider-image2.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-12">
                <div className="welcome-text">
                  <div className="hero-text">
                    <h4>Your time is so important for us</h4>
                    <h1>Build Your WorldClass Brand with Bizwheel</h1>
                    <div className="p-text">
                      <p>
                        Nunc tincidunt venenatis elit. Etiam venenatis quam vel maximus bibendum
                        Pellentesque elementum dapibus diam tristique
                      </p>
                    </div>
                    <div className="button">
                      <a href="blog.html" className="bizwheel-btn theme-1 effect">
                        Read our blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
        {/* Single Slider */}
        <div
          className="single-slider"
          style={{ backgroundImage: "url('img/slider-image/slider-image3.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-12">
                <div className="welcome-text">
                  <div className="hero-text">
                    <h4>Our experties are waiting for you</h4>
                    <h1>Best Way to Represent your Next Business</h1>
                    <div className="p-text">
                      <p>
                        Nunc tincidunt venenatis elit. Etiam venenatis quam vel maximus bibendum
                        Pellentesque elementum dapibus diam tristique
                      </p>
                    </div>
                    <div className="button">
                      <a href="team.html" className="bizwheel-btn theme-2 effect">
                        Our Leaders
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
      </div>
    </section>
  );
};

export default HeroSlider;
