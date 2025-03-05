const FeaturesArea: React.FC = () => {
  return (
    <section className="features-area section-bg">
      <div className="container">
        <div className="row">
          {[
            "Creative Design",
            "Quality Service",
            "On-time Delivery",
            "24/7 Live support",
          ].map((title, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div
                className={`single-feature ${
                  title === "On-time Delivery" ? "active" : ""
                }`}
              >
                <div className="icon-head">
                  <i className="fa fa-podcast"></i>
                </div>
                <h4>
                  <a href="service-single.html">{title}</a>
                </h4>
                <p>
                  Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo,
                  antequis laoreet ullamcorper, velitsd odio scelerisque tod
                </p>
                <div className="button">
                  <a href="service-single.html" className="bizwheel-btn">
                    <i className="fa-solid fa-circle-arrow-right"></i>Learn More
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

export default FeaturesArea;
