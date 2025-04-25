const Breadcrumbs = ({title, breadcrumb}: {title: string, breadcrumb:{link: string, title: string}[]}) => {
  return (
   <div style={{width:"100%",padding:"5px"}}>
     <div className="breadcrumbs overlay" style={{ backgroundImage: "url('/img/breadcrumb.jpg')", borderRadius:"20px", overflow:"hidden"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bread-inner">
              {/* Bread Menu */}
              <div className="bread-menu">
                <ul>
                  {/* <li><a href="index.html">Home</a></li> */}
                  {breadcrumb.map((item, index) => (
                    <li key={index}><a href={item.link}>{item.title}</a></li>
                  ))}
                </ul>
              </div>
              {/* Bread Title */}
              <div className="bread-title">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Breadcrumbs;
