

const ErrorPageComp = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
            <div className="error-inner">
              <h4>404</h4>
              <h2>
                Page Not <span>Found!</span>
              </h2>
              <p>
                It looks like nothing was found at this location. Please try to find something from the
                search form below. or go to back
              </p>
              <div className="button">
                <a style={{borderRadius:"20px"}} href="/" className="bizwheel-btn">
                  <i className="fa fa-long-arrow-left"></i>Go to home
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src="img/error-img.png" alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPageComp;
