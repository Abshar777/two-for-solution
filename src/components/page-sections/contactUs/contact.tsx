import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="contact-us section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-12">
            {/* Contact Form */}
            <div style={{borderRadius:"20px", overflow:"hidden"}} className="contact-form-area m-top-30">
              <h4>Get In Touch</h4>
              <form
                className="form"
                method="post"
                action="https://picmaticweb.srrafi.com/html/bizwheel/mail/mail.php"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-user"></i>
                      </div>
                      <input style={{borderRadius:"20px"}} type="text" name="first_name" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-user"></i>
                      </div>
                      <input style={{borderRadius:"20px"}} type="text" name="last_name" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <input style={{borderRadius:"20px"}} type="email" name="email" placeholder="Type Subjects" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-tag"></i>
                      </div>
                      <input style={{borderRadius:"20px"}} type="text" name="subject" placeholder="Type Subjects" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group textarea">
                      <div className="icon">
                        <i className="fa fa-pencil"></i>
                      </div>
                      <textarea style={{borderRadius:"20px"}} name="message" rows={5}></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group button">
                      <button style={{borderRadius:"20px"}} type="submit" className="bizwheel-btn theme-2">
                        Send Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* End contact Form */}
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="contact-box-main m-top-30">
              <div className="contact-title">
                <h2>Contact with us</h2>
                <p>
                We’d love to hear from you! Whether you have a question, need a quote, or want to discuss a project, feel free to reach out — we’re here to help.


                </p>
              </div>
              {/* Single Contact */}
              <div className="single-contact-box">
                <div className="c-icon">
                  <i className="fa-regular fa-clock"></i>
                </div>
                <div className="c-text">
                  <h4>Opening Hour</h4>
                  <p>
                    Monday - Saturday<br />08AM - 10PM (everyday)
                  </p>
                </div>
              </div>
              {/* End Single Contact */}
              {/* Single Contact */}
              <div className="single-contact-box">
               
               
              </div>
              {/* End Single Contact */}
              {/* Single Contact */}
              <div className="single-contact-box">
                <div className="c-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="c-text">
                  <h4>Email Us</h4>
                  <p>
                  gm@twofoursolution.com<br />
                  
                  </p>
                </div>
              </div>
              {/* End Single Contact */}
              <div style={{borderRadius:"20px"}} className="button">
                <Link style={{borderRadius:"20px"}} to="/portfolio" className="bizwheel-btn theme-1">
                  Our Works<i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
