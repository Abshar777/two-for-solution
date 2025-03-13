
const CallAction = () => {
  return (
    <div className="w-full h-full p-2">
      <section
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
                <h2>Discover Our Full Range of Services</h2>
                <p>
                  At Two Four Solutions, we offer a comprehensive range of
                  services designed to support your business at every stage.
                  Whether you're undertaking a complex project, seeking
                  cutting-edge chemical solutions, or needing reliable
                  procurement services, our expert team is here to provide
                  tailored, high-quality services that help you achieve
                  operational excellence.
                </p>
              </div>
            </div>
            <div style={{borderRadius:"20px"}} className="col-lg-3 col-12">
              <div className="button">
                <a
                  href="portfolio.html"
                  style={{ borderRadius: "20px" }}
                  className="bizwheel-btn"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallAction;
