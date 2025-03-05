import React from "react";

const CallAction = () => {
  return (
    <section
      className="call-action overlay"
      style={{ backgroundImage: "url('img/cta-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12">
            <div className="call-inner">
              <h2>Brand Products &amp; Creativity is our Fashion</h2>
              <p>
                Vehicula maximus velit. Morbi non tincidunt purus, a hendrerit
                nisi. Vivamus elementum
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="button">
              <a href="portfolio.html" className="bizwheel-btn">
                Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAction;
