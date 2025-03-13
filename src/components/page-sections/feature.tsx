import { features } from "../../constants/features";

const FeaturesArea: React.FC = () => {
  return (
    <section className="features-area section-bg">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ borderRadius: "20px" }}
              className="col-lg-3  col-md-6 col-12"
            >
              <div
                style={{ borderRadius: "20px" }}
                className={`single-feature min-h-[22rem] flex flex-col  justify-between cursor-pointer items-center ${
                  feature.title === "On-time Delivery" ? "active" : ""
                }`}
              >
                <div className="icon-head">
                  <i className={feature.icon}></i>
                </div>
                <h4>
                  <a href="service-single.html">{feature.title}</a>
                </h4>
                <p>{feature.description}</p>
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
