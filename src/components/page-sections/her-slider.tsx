
import { heroSlider } from "../../constants/hero";
import { useNavigate } from "react-router-dom";
const HeroSlider: React.FC = () => {
  const router = useNavigate();
  return (
    <section className="hero-slider style1 rounded-2xl p-2 flex items-center justify-center overflow-hidden">
      <div className="home-slider rounded-2xl w-[99%]  h-full relative">
        {/* Single Slider */}
        {heroSlider.map((slider) => (
          <div className="w-full h-full   flex justify-center items-center mt-4">
            <div style={{backgroundColor:"#040404"}} className="w-full h-full  top-2 absolute  overflow-hidden rounded-2xl">
              <img
                src={slider.image}
                alt="Hero Slider"
                className="w-full rounded-2xl object-cover"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  opacity: "0.2",
                }}
              />
            </div>
            <div className="container -translate-y-16  relative z-[10]">
              <div className="welcome-text ">
                <div className="hero-text">
                  <h4 style={{backgroundColor:"#4CAF50"}} className="text-white">{slider.title}</h4>
                  <h1 className="text-white">{slider.title}</h1>
                  <div className="p-text">
                    <p className="text-white">{slider.caption}</p>
                  </div>
                  <div style={{ borderRadius: "20px" }} className="button ">
                    <a
                      style={{ borderRadius: "20px", backgroundColor: "#ffffff40", backdropFilter: "blur(10px)" }}
                     onClick={() => {
                      router(slider.btn1Link);
                     }}
                      className="bizwheel-btn  rounded-2xl backdrop-blur-3xl  effect"
                    >
                      
                      {slider.btn1}
                    </a>
                    <a
                    style={{borderRadius:"20px", backgroundColor:"#0D1B2A", backdropFilter: "blur(10px)" }}
                     onClick={() => {
                      router(slider.btn2Link);
                     }}
                      className="bizwheel-btn md:mt-0 mt-2 theme-2 effect"
                    >
                      {slider.btn2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
