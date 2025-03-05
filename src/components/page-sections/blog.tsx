
const blogs = [
  {
    id: 1,
    title: "We Provide you Best & Creative Consulting Service",
    image: "img/blog/blog-1.jpg",
    category: "Business",
    date: "April 2020",
    comments: 15,
    likes: 35,
    description:
      "Sed tempus pulvinar augue ut euismod. Donec a nisi volutpat, dignissim mauris eget...",
    link: "blog-single.html",
  },
  {
    id: 2,
    title: "We Provide you Best & Creative Consulting Service",
    image: "img/blog/blog-2.jpg",
    category: "Consulting",
    date: "April 2020",
    comments: 10,
    likes: 55,
    description:
      "Sed tempus pulvinar augue ut euismod. Donec a nisi volutpat, dignissim mauris eget...",
    link: "blog-single.html",
  },
  {
    id: 3,
    title: "We Provide you Best & Creative Consulting Service",
    image: "img/blog/blog-3.jpg",
    category: "Read more",
    date: "April 2020",
    comments: 18,
    likes: 69,
    description:
      "Sed tempus pulvinar augue ut euismod. Donec a nisi volutpat, dignissim mauris eget...",
    link: "blog-single.html",
  },
  {
    id: 4,
    title: "We Provide you Best & Creative Consulting Service",
    image: "img/blog/blog-4.jpg",
    category: "Read more",
    date: "April 2020",
    comments: 89,
    likes: 20,
    description:
      "Sed tempus pulvinar augue ut euismod. Donec a nisi volutpat, dignissim mauris eget...",
    link: "blog-single.html",
  },
];

const BlogSection = () => {
  return (
    <section className="latest-blog section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div className="section-title default text-center">
              <div className="section-top">
                <h1>
                  <span>Latest</span> <b>Published</b>
                </h1>
              </div>
              <div className="section-bottom">
                <div className="text">
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Conse Ctetur Adipiscing Elit,
                    Sed Do Eiusmod Tempor Ares Incididunt Utlabore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Posts */}
        <div className="row">
          <div className="col-12">
            <div className="blog-latest blog-latest-slider">
              {blogs.map((blog) => (
                <div key={blog.id} className="single-slider">
                  <div className="single-news">
                    <div className="news-head overlay">
                      <span
                        className="news-img"
                        style={{ backgroundImage: `url(${blog.image})` }}
                      ></span>
                      <div className="cat">
                        <a href="#" className="bizwheel-btn theme-2">
                          {blog.category}
                        </a>
                      </div>
                    </div>
                    <div className="news-body">
                      <div className="news-content">
                        <h3 className="news-title">
                          <a href={blog.link}>{blog.title}</a>
                        </h3>
                        <ul className="news-meta">
                          <li className="date">
                            <i className="fa fa-calendar"></i> {blog.date}
                          </li>
                          <li className="view">
                            <i className="fa fa-comments"></i> {blog.comments}
                          </li>
                          <li className="heart">
                            <i className="fa fa-heart"></i> {blog.likes}
                          </li>
                        </ul>
                        <div className="news-text">
                          <p>{blog.description}</p>
                          <a href={blog.link} className="bizwheel-btn">
                            <i className="fa fa-angle-left"></i> Read more
                          </a>
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
