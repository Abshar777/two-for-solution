import { ourMissionAndVision } from "../../constants/ourMissionAndVision";



const BlogSection = () => {
  return (
    <section className="latest-blog section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div className="section-title default text-center">
              <div className="section-top">
                <h1>
                  {/* <span>Latest</span> */}
                  <b>our mission | our vision | our&nbsp;values</b>
                </h1>
              </div>
              <div className="section-bottom">
                <div className="text"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Posts */}
        <div className="row">
          <div className="col-12">
            <div className="blog-latest blog-latest-slider">
              {ourMissionAndVision.map((blog) => (
                <div
                  style={{ borderRadius: "20px", minHeight: "20rem" }}
                  key={blog.title}
                  className="single-slider"
                >
                  <div
                    style={{ borderRadius: "20px", minHeight: "20rem" }}
                    className="single-news"
                  >
                    <div className="news-body">
                      <div className="news-content">
                        <h3 style={{ color: "#4CAF50" }} className="news-title">
                          <a>{blog.title}</a>
                        </h3>
                        <ul className="news-meta"></ul>
                        <div className="">
                          <p style={{color:"#2E2751"}}>{blog.description}</p>
                          <ol style={{ listStyleType: "disc" }}>
                            {blog.list &&
                              blog.list.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
