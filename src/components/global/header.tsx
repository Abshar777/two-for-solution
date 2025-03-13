import React from "react";
import Topbar from "../ui/topbar";
import { navItems } from "../../constants/header";
const Header: React.FC = () => {
  return (
    <header className="header one">
      <Topbar />
      {/* Middle Header */}
      <div
        style={{
          backgroundColor: "#ffffff40",
          backdropFilter: "blur(22px)",
          borderRadius: "0 0px 15px 15px",
        }}
        className="middle-header"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="middle-inner">
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-12">
                    {/* Logo */}
                    <div className="logo ">
                      <div className="img-logo -translate-y-2 pb-1">
                        <a href="index.html">
                          <h1>Logo</h1>
                          {/* <img src="img/logo.png" alt="Logo" />
                          <img src="/img/agency/bizwheel-dark.png" alt="Two for Solution" /> */}
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
                            <ul
                              id="nav"
                              className="nav main-menu menu navbar-nav"
                            >
                              {navItems.map((item, index) => (
                                <li key={index} className="">
                                  <a href={item.link}>{item.name}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </nav>
                      {/* End Main Menu */}
                      <div className="right-button rounded-[15px]">
                        <a href="contact.html" className="bizwheel-btn">
                          Get a Quote
                        </a>
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
          <button className="btn">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="single-content">
          <h4>About Two for Solution</h4>
          <p>
            The main component of a healthy environment for self-esteem is that
            it needs to be nurturing. It should provide unconditional warmth.
          </p>
          <ul className="address-widget-list">
            <li className="footer-mobile-number">
              <i className="fa fa-phone"></i> +(600) 125-4985-214
            </li>
            <li className="footer-mobile-number">
              <i className="fa fa-envelope"></i> info@yoursite.com
            </li>
            <li className="footer-mobile-number">
              <i className="fa-solid fa-location-dot"></i> House Building Uttara
            </li>
          </ul>
          <div className="side-button">
            <a href="portfolio.html" className="bizwheel-btn theme-2 effect">
              View Our Portfolio
            </a>
          </div>
        </div>
        <div className="single-content">
          <h4>Important Links</h4>
          <ul className="links">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End Sidebar Popup */}
    </header>
  );
};

export default Header;
