import React from "react";
import Topbar from "../ui/topbar";
const Header: React.FC = () => {
  return (
    <header className="header one">
      <Topbar />
      {/* Middle Header */}
      <div className="middle-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="middle-inner">
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-12">
                    {/* Logo */}
                    <div className="logo">
                      <div className="img-logo">
                        <a href="index.html">
                          <img src="img/logo.png" alt="Logo" />
                          <img src="/img/agency/bizwheel-dark.png" alt="Bizwheel" />
                        </a>
                      </div>
                    </div>
                    <div className="mobile-nav"></div>
                  </div>
                  <div className="col-lg-10 col-md-9 col-12">
                    <div className="menu-area">
                      {/* Main Menu */}
                      <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">
                          <div className="nav-inner">
                            <ul id="nav" className="nav main-menu menu navbar-nav">
                              <li className="icon-active"><a href="#">Home</a></li>
                              <li className="icon-active"><a href="#">Our Services</a></li>
                              <li className="icon-active"><a href="#">Our Portfolio</a></li>
                              <li className="icon-active"><a href="#">Blog</a></li>
                              <li className="icon-active"><a href="#">Blog Single</a></li>
                              <li className="icon-active"><a href="#">Pages</a></li>
                              <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                      {/* End Main Menu */}
                      <div className="right-button">
                        <a href="contact.html" className="bizwheel-btn">Get a Quote</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Middle Header */}
      {/* Sidebar Popup */}
      <div className="sidebar-popup">
        <div className="cross">
          <button className="btn"><i className="fa fa-close"></i></button>
        </div>
        <div className="single-content">
          <h4>About Bizwheel</h4>
          <p>The main component of a healthy environment for self-esteem is that it needs to be nurturing. It should provide unconditional warmth.</p>
          <ul className="address-widget-list">
            <li className="footer-mobile-number"><i className="fa fa-phone"></i> +(600) 125-4985-214</li>
            <li className="footer-mobile-number"><i className="fa fa-envelope"></i> info@yoursite.com</li>
            <li className="footer-mobile-number"><i className="fa-solid fa-location-dot"></i> House Building Uttara</li>
          </ul>
          <div className="side-button">
            <a href="portfolio.html" className="bizwheel-btn theme-2 effect">View Our Portfolio</a>
          </div>
        </div>
        <div className="single-content">
          <h4>Important Links</h4>
          <ul className="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing Plan</a></li>
            <li><a href="#">Blog & News</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
      {/* End Sidebar Popup */}
    </header>
  );
};

export default Header;