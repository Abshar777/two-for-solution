import { Link } from "react-router-dom";
import { features } from "../../constants/features";

const FeaturesArea: React.FC = () => {
  const animation = ["fade-right", "fade-left", "fade-down", "fade-up"];
  return (
    <section 
    
    className="features-area section-bg">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div
              data-aos={animation[index % animation.length]}
              data-aos-delay={index * 100}
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
                  <Link to="/">{feature.title}</Link>
                </h4>
                <p>{feature.description}</p>
                <div className="button">
                  <Link to="/about" className="bizwheel-btn">
                    <i className="fa-solid fa-circle-arrow-right"></i>Learn More
                  </Link>
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
