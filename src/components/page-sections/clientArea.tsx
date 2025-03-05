
const clients = [
  "img/client/client-1.png",
  "img/client/client-2.png",
  "img/client/client-3.png",
  "img/client/client-4.png",
  "img/client/client-5.png",
  "img/client/client-6.png",
];

const ClientArea = () => {
  return (
    <div className="clients section-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner-slider">
              {clients.map((client, index) => (
                <div key={index} className="single-slider">
                  <div className="single-client">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src={client} alt={`Client ${index + 1}`} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientArea;
