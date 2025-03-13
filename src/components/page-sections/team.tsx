
const teamMembers = [
  {
    name: "Camdeaz Pour",
    designation: "Ceo- Founder/ Designer",
    image: "img/team/team-1.jpg",
  },
  {
    name: "Bramon Damana",
    designation: "Marketing Head",
    image: "img/team/team-2.jpg",
  },
  {
    name: "Losama Princia",
    designation: "Animation Designer",
    image: "img/team/team-3.jpg",
  },
  {
    name: "Putian Jason",
    designation: "Founder/ Designer",
    image: "img/team/team-4.jpg",
  },
  {
    name: "Ray Simmons",
    designation: "Team leader",
    image: "img/team/team-5.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="team section-bg section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title style2 text-center">
              <div className="section-top">
                <h1>
                  <span>Leaders</span> <b>Creative Team</b>
                </h1>
                <h4>Our expert leaders are waiting for you.</h4>
              </div>
              <div className="section-bottom">
                <div className="text-style-two">
                  <p>
                    Aliquam Sodales Justo Sit Amet Urna Auctor Scelerisquinterdum
                    Leo Anet Tempus Enim Esent Egetis Hendrerit Vel Nibh Vitae
                    Ornar Sem Velit Aliquam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-slider">
          {teamMembers.map((member, index) => (
            <div className="single-slider" key={index}>
              <div className="single-team">
                <div className="team-head">
                  <img src={member.image} alt={member.name} />
                  <ul className="team-social">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter-square"></i>
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
                </div>
                <div className="t-content">
                  <div className="content-inner">
                    <h4 className="name">
                      <a href="#">{member.name}</a>
                    </h4>
                    <span className="designation">{member.designation}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
