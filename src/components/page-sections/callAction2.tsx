import { Link } from "lucide-react";

const CallAction = () => {
  return (
    <div className="w-full h-full p-2">
      <section
      data-aos="fade-up"
        className="call-action overlay"
        style={{
          backgroundImage: "url('img/cta-bg.jpg')",
          borderRadius: "20px",
        }}
      >
        <div style={{borderRadius:"20px"}} className="container">
          <div style={{borderRadius:"20px"}} className="row">
            <div style={{borderRadius:"20px"}} className="col-lg-9 col-12">
              <div style={{borderRadius:"20px"}} className="call-inner">
                <h2 style={{fontSize:"2rem"}}>Explore Our Services | Get in Touch with Our Experts</h2>
       
              </div>
            </div>
            <div style={{borderRadius:"20px"}} className="col-lg-3 col-12">
              <div className="button">
                <Link
                  to="/portfolio"
                  style={{ borderRadius: "20px" }}
                  className="bizwheel-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallAction;
