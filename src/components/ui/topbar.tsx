import React from "react";
import {
  FaSearch,
  FaBars,
} from "react-icons/fa";

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            {/* Top Contact */}
            <div className="top-contact">
              <div className="single-contact">
                <i className="fa fa-phone"></i>Phone: +(600) 125-4985-214
              </div>
              <div className="single-contact">
                <i className="fa fa-envelope-open"></i>Email: info@yoursite.com
              </div>
              <div className="single-contact">
                <i className="fa-regular fa-clock"></i>Opening: 08AM - 09PM
              </div>
            </div>
            {/* End Top Contact */}
          </div>
          <div className="col-lg-4 col-12">
            <div className="topbar-right">
              {/* Social Icons */}
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
              </ul>
              {/* Right Bar */}
              <div className="right-bar">
                {/* Search Bar */}
                <ul className="right-nav">
                  <li className="top-search">
                    <a href="#0">
                      <FaSearch />
                    </a>
                  </li>
                  <li className="bar">
                    <a>
                      <FaBars />
                    </a>
                  </li>
                </ul>
                {/* End Search Bar */}
                {/* Search Form */}
                <div className="search-top">
                  <form action="#" className="search-form" method="get">
                    <input
                      type="text"
                      name="s"
                      value=""
                      placeholder="Search here"
                    />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
                {/* End Search Form */}
              </div>
              {/* End Right Bar */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
