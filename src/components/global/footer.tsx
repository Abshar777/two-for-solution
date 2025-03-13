const Footer = () => {
    return (
      <footer className="footer" style={{ backgroundImage: "url('img/map.png')" }}>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-widget footer-about widget">
                  <div className="logo">
                    <div className="img-logo">
                      <a className="logo" href="index.html">
                        <img className="img-responsive" src="img/logo2.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="footer-widget-about-description">
                    <p>
                      Beatae vitae dicta su explicabo nemo enim ipsam voluptatem quia voluptas
                      sitBeatae vitae sitBeatae vitae dicta suntania..
                    </p>
                  </div>
                  <div className="social">
                    <ul className="social-icons">
                      <li>
                        <a className="facebook" href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a className="pinterest" href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="#" className="bizwheel-btn">About Us</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-widget f-link widget">
                  <h3 className="widget-title">Company</h3>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Pricing Plan</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-widget footer-news widget">
                  <h3 className="widget-title">Blog Page</h3>
                  <div className="single-f-news">
                    <div className="post-thumb">
                      <a href="#"><img src="img/blog/blog-3.jpg" alt="#" /></a>
                    </div>
                    <div className="content">
                      <p className="post-meta"><i className="fa-regular fa-clock"></i>April 15, 2020</p>
                      <h4 className="title">
                        <a href="blog-single.html">We Provide you Best &amp; Creative Consulting Service</a>
                      </h4>
                    </div>
                  </div>
                  <div className="single-f-news">
                    <div className="post-thumb">
                      <a href="#"><img src="img/blog/blog-4.jpg" alt="#" /></a>
                    </div>
                    <div className="content">
                      <p className="post-meta"><i className="fa-regular fa-clock"></i>April 10, 2020</p>
                      <h4 className="title">
                        <a href="blog-single.html">We Provide you Best &amp; Creative Consulting Service</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-widget footer_contact widget">
                  <h3 className="widget-title">Contact</h3>
                  <p>Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem</p>
                  <ul className="address-widget-list">
                    <li className="footer-mobile-number">
                      <i className="fa fa-phone"></i>+(600) 125-4985-214
                    </li>
                    <li className="footer-mobile-number">
                      <i className="fa fa-envelope"></i>info@yoursite.com
                    </li>
                    <li className="footer-mobile-number">
                      <i className="fa-solid fa-location-dot"></i>House Building Uttara
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                <div className="footer-newsletter">
                  <form action="#" method="post" className="newsletter-area">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Sign Up</button>
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
                    © Copyright <a href="#">Two for Solution</a>. Design &amp; Development By
                    <a target="_blank" href="https://picmaticweb.com/"> PicmaticWeb</a>
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