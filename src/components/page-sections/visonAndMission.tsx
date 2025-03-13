import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const 
CampaignSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="700">
          <h2 className="text-3xl font-bold">
            <span style={{ fontFamily: "integral" }}>Our mission & vision</span>
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6" data-aos="fade-up" data-aos-duration="700">
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            pagination={{ clickable: true }}
            navigation
            className="rounded-xl"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">Greener is Greater!</h4>
                  <p className="mt-2 text-gray-600">
                    At SEAE, we are dedicated to offering sustainable products, services, and
                    solutions that not only meet the needs of today but also actively contribute to a
                    positive environmental impact. Our mission is to spark a global movement toward
                    greener living through continuous innovation and a steadfast commitment to
                    eco-conscious practices.
                  </p>
                  <a
                    href="/About"
                    className="inline-block mt-4 px-4 py-2 border border-brown-600 rounded-full transition-all hover:bg-brown-600 hover:text-white"
                  >
                    Read more
                  </a>
                </div>
                <div className="flex-1">
                  <img
                    src="/images/campaign/Green Architecture.jpg"
                    alt="campaign"
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">Sustainable, Balanced World</h4>
                  <p className="mt-2 text-gray-600">
                    SEAE's aspirations extend towards a future where sustainability is effortlessly
                    integrated into the daily routines of individuals and businesses. Through
                    innovative practices and collaborative efforts, we aspire to create enduring
                    solutions that safeguard our planet for the next generations.
                  </p>
                  <a
                    href="/About"
                    className="inline-block mt-4 px-4 py-2 border border-brown-600 rounded-full transition-all hover:bg-brown-600 hover:text-white"
                  >
                    Read more
                  </a>
                </div>
                <div className="flex-1">
                  <img
                    src="/images/campaign/chuttersnap-znOg3WpLSsY-unsplash.jpg"
                    alt="campaign"
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <div className="text-center p-4 bg-white rounded-xl shadow-md">01. Our Mission</div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md">02. Our Vision</div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
