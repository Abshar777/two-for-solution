
import Topbar from "../ui/topbar";
import { navItems } from "../../constants/header";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const navigate = useNavigate();
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
                              <h4 className="text-xs logo-text relative z-10">
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
                                <li
                                  key={index}
                                  className={`${
                                    item.children.length > 0
                                      ? "icon-active"
                                      : ""
                                  }`}
                                >
                                  <a onClick={() => {
                                    navigate(item.link);
                                  }}>{item.name}</a>
                                  {item.children.length > 0 && (
                                    <ul className="sub-menu">
                                      {item.children.map(
                                        (child, childIndex) => (
                                          <li key={childIndex}>
                                            <a onClick={() => {
                                              navigate(child.link);
                                            }}>
                                              {child.name}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </nav>
                      {/* End Main Menu */}
                      <div className="right-button rounded-[15px]">
                    
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
          <h4>About Two four Solution</h4>
          <p>
            Two Four Solutions LLC is a UAE based company that provides a wide range of services to the oil and gas industry.
          </p>
          <ul className="address-widget-list">
          
            <li onClick={()=>{
              console.log("sdfghkl;")
              window.open("mailto:gm@twofoursolution.com","_blank")
            }} className="footer-mobile-number">
              <i className="fa fa-envelope"></i> <a >gm@twofoursolution.com</a>
            </li>
            <li className="footer-mobile-number">
              <i className="fa-solid fa-location-dot"></i> Ras Al Khaimah, UAE
            </li>
          </ul>
          <div className="side-button">
        
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
