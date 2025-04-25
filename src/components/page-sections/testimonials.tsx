 ;

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      clientImg: 'img/client/client-7.png',
      userImg: 'img/users/user-01.png',
      name: 'MarkPhillips',
      location: 'Alaska, US',
    },
    {
      clientImg: 'img/client/client-8.png',
      userImg: 'img/users/user-02.png',
      name: 'MarkPhillips',
      location: 'Alaska, US',
    },
    {
      clientImg: 'img/client/client-9.png',
      userImg: 'img/users/user-03.png',
      name: 'MarkPhillips',
      location: 'Alaska, US',
    },
  ];

  return (
   <div style={{width:"100%",padding:"15px"}} className="">
     <section
     data-aos="fade-up"
      className="home-4-testimonial"
      style={{ backgroundImage: "url('img/testimonial-bg2.png')", borderRadius:"20px",overflow:"hidden" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center position-relative">
            <h4 className="home-three-subtitle">TESTIMONIALS</h4>
            <h2 className="home-three-title">What People Say</h2>
            <img src="img/icons/icon-06.svg" alt="Icon" className="quote-icon" />
          </div>
        </div>
        <div className="testimonial-slider-4">
          {Array.from({ length: 7 }).map((_, index) => {
            const testimonial = testimonials[index % testimonials.length];
            return (
              <div className="single-slider" key={index}>
                <div className="client">
                  {/* <img src={testimonial.clientImg} alt="Client" /> */}
                </div>
                <div className="icon">
                  {/* <img src="img/icons/icon-05.svg" alt="Quote" className="icon" /> */}
                </div>
                <p className="author-quote">
                  Customer support is excellent and documentation good – novice can easily understand.
                  Although I had a problem with the performance, thanks to the customer support.
                </p>
                <div className="author">
                  <div>
                    <img src={testimonial.userImg} alt="User" />
                  </div>
                  <div>
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-meta">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
   </div>
  );
};

export default TestimonialSection;
