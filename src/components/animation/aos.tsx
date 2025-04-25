import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <></>;
};

export default Aos;
