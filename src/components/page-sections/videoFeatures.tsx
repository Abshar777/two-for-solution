import React from "react";
import img from "../../../public/img/why-choose.jpg";
import { whyChooseUs } from "../../constants/whyChoosUs";
const VideoFeature: React.FC = () => {
  return (
   <div className="w-full h-full p-2">
     <section
      style={{ backgroundColor: "#f3a712",borderRadius:"20px" }}
      className="video-feature side overlay "
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="img-feature">
              <img src={img} className="rounded-2xl" alt="Video Thumbnail" />
              <div className="video-play">
                {/* <a
                  href="https://www.youtube.com/watch?v=RLlPLqrw8Q4"
                  className="video video-popup mfp-iframe"
                >
                  <i className="fa fa-play"></i>
                </a> */}
                {/* <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div> */}
              </div>
              <span>Why choos us</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="features-main">
              <div className="title">
                <h2>why choose us</h2>
                <p style={{ color: "#fff" }}>
                  with hard earned knowledge and experience we are
                  professionally structured to focus on each aspect of its
                  business to deliver high levels of economy
                </p>
              </div>
              <div className="b-features">
                <div className="row">
                  {whyChooseUs.map((item) => (
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="single-list-feature">
                        <i className={item.icon}></i>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                  <div className="col-lg-6 col-md-6 col-12">
                   <div className="w-full h-full flex items-center justify-center">
                   <div className="feature-btn">
                      <a
                        style={{
                          backgroundColor: "#fff",
                          color: "#f3a712",
                          borderRadius: "20px",
                        }}
                        href="contact.html"
                        className="bizwheel-btn  theme-2"
                      >
                        Know More
                      </a>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default VideoFeature;
