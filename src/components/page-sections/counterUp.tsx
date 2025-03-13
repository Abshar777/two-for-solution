import React from "react";
import Counter from "../animation/counter";

const CounterUp: React.FC = () => {
  return (
    <div className="w-full h-full p-2">
      <section style={{ borderRadius: "20px" }} className="counterup">
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <CounterItem key={index} counter={counter} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const CounterItem: React.FC<{ counter: { number: string; suffix: string; label: string; icon: string } }> = ({ counter }) => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-counter">
        <div className="icon">
          <i className={`fa ${counter.icon}`}></i>
        </div>
        <div className="conter-content">
          <div className="counter-head">
            <h3>
             <Counter value={parseInt(counter.number)} />
              <span>{counter.suffix}</span>
            </h3>
          </div>
          <p className="-translate-y-10">{counter.label}</p>
        </div>
      </div>
    </div>
  );
};

const counters = [
  { number: "105", suffix: "K", label: "Complete Works", icon: "fa-book" },
  { number: "5999", suffix: "+", label: "Happy Clients", icon: "fa-users" },
  { number: "5988", suffix: "+", label: "Support Ticket", icon: "fa-life-ring" },
  { number: "8569", suffix: "+", label: "Company Work", icon: "fa-fire" },
];

export default CounterUp;