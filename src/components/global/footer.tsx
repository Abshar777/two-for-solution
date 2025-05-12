const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "url('/img/map.png')",
        borderRadius: "15px 15px 0 0",
      }}
    >
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-widget footer-about widget">
              <div className="logo ">
                      <div className="img-logo ">
                        <a href="/">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: ".6rem",
                              transform: "translateY(-.7rem)",
                            }}
                            className=""
                          >
                            <div
                              style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                transform: "translateY(.7rem) translateX(.4rem)",
                            
                              }}
                              className=""
                            >
                              <img style={{
                                display:"block",
                                mixBlendMode:"darken"
                              }} src="/logo.svg"  />
                            </div>
                            <div
                              style={{ height: "1rem",transform:"translateY(-.3rem)" }}
                              className="flex flex-col inline-block md:translate-y-0 justify-center items-center"
                            >
                              <h4 style={{color:"#fff"}} className="text-xs logo-text relative z-10">
                                Two Four{" "}
                              </h4>
                              <h4
                                style={{ color: "#4CAF50" }}
                                className="text-xs logo-text  -translate-y-2 absolute"
                              >
                                Solution
                              </h4>
                            </div>
                          </div>

                          {/* <img src="img/agency/bizwheel-dark.png" alt="Two for Solution" /> */}
                        </a>
                      </div>
                    </div>
                <div className="footer-widget-about-description">
                  <p>
                    Welcome to Two Four Solutions, your trusted partner for
                    high-quality project management services, oil field
                    chemicals, and general trading solutions. Based in Ras Al
                    Khaimah, UAE
                  </p>
                </div>
                <div className="social">
                  <ul className="social-icons">
                    <li>
                      <a
                        className="facebook"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="twitter"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="linkedin"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="pinterest"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="button">
                  <a
                    href="/about"
                    style={{ borderRadius: "20px" }}
                    className="bizwheel-btn"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="single-widget f-link widget">
                <h3 className="widget-title">Company</h3>
                <ul>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/our-services">Our Services</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="single-widget f-link widget">
                <h3 className="widget-title">Services</h3>
                <ul>
                  <li>
                    <a href="/project-management-services">
                      Project&nbsp;Management&nbsp;
                    </a>
                  </li>
                  <li>
                    <a href="/oil-field-chemicals">Oil&nbsp;Field&nbsp;Chemicals</a>
                  </li>
                  <li>
                    <a href="/general-trading">General&nbsp;Trading</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-widget footer_contact widget">
                <h3 className="widget-title">Contact</h3>
               
                <ul className="address-widget-list">
                  
                  <li className="footer-mobile-number">
                    <i className="fa fa-envelope"></i>gm@twofoursolutions.com
                  </li>
                  <li className="footer-mobile-number">
                    <i className="fa-solid fa-location-dot"></i>Ras Al Khaimah, UAE
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
              <div
                style={{ borderRadius: "20px" }}
                className="footer-newsletter"
              >
                <form
                  style={{ borderRadius: "20px", backgroundColor: "#ffffff40" }}
                  action="#"
                  method="post"
                  className="newsletter-area"
                >
                  <input
                    style={{ borderRadius: "20px", backgroundColor: "white" }}
                    type="email"
                    placeholder="Your email address"
                  />
                  <button style={{ borderRadius: "20px" }} type="submit">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content">
                <p>
                  © Copyright <a href="#">Abshar777</a>. Design &amp;
                  Development By
                  <a target="_blank" href="https://picmaticweb.com/">
                    {" "}
                    Abshar777
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
