import { serviceCommitment } from "../../../constants/features";

const FeaturesArea: React.FC = () => {
  const animation = ["fade-right", "fade-left", "fade-down", "fade-up"];
  return (
    <section className="features-area section-bg">
      <div className="container">
        <div className="section-title"> 
          <h2 style={{textAlign:"center",textTransform:"capitalize"}}>Service Commitment & Global Reach</h2>
        </div>
        <div className="row">
          {serviceCommitment.map((feature, index) => (
            <div
              data-aos={animation[index % animation.length]}
              data-aos-delay={index * 100}
              key={index}
              style={{ borderRadius: "20px" }}
              className="col-lg-3  col-md-6 col-12"
            >
              <div
                style={{ borderRadius: "20px",minHeight:"13rem" }}
                className={`single-feature  flex flex-col  justify-center  cursor-pointer items-center `}
              >
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesArea;
