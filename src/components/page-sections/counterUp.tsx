import React from "react";

const CounterUp: React.FC = () => {
  return (
    <section className="counterup">
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="single-counter">
                <div className="icon">
                  <i className={`fa ${counter.icon}`}></i>
                </div>
                <div className="conter-content">
                  <div className="counter-head">
                    <h3>
                      <b className="number">{counter.number}</b>
                      <span>{counter.suffix}</span>
                    </h3>
                  </div>
                  <p>{counter.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const counters = [
  { number: "105", suffix: "K", label: "Complete Works", icon: "fa-book" },
  { number: "5999", suffix: "+", label: "Happy Clients", icon: "fa-users" },
  { number: "5988", suffix: "+", label: "Support Ticket", icon: "fa-life-ring" },
  { number: "8569", suffix: "+", label: "Company Work", icon: "fa-fire" },
];

export default CounterUp;