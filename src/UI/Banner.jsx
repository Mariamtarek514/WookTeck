import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import partenter1 from "../assets/images/partenter/partener_1.png";
import partenter2 from "../assets/images/partenter/partener_2.png";
import partenter3 from "../assets/images/partenter/partener_3.png";
import partenter4 from "../assets/images/partenter/partener_4.png";
const Banner = () => {
  return (
    <div className="bg-[url(../assets/home_5.png)] bg-cover flex items-center  flex-col bg-black/85 bg-center h-[50vh] bg-no-repeat">
      <h2 className="text-white text-center text-[29px] font-bold mt-16">
        Our partners
      </h2>
      <div className="w-full mt-10 Container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },

            1100: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex text-center flex-col items-center justify-center gap-4">
              <img src={partenter1} alt="partners" />
              <p className="text-white text-sm font-normal">
                <span className="text-primary font-bold">
                  Milano Parquet S.R.L.
                </span>{" "}
                We take care of wood and carefully monitor the entire production
                process.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex text-center flex-col items-center justify-center gap-4">
              <img src={partenter2} alt="partners" />
              <p className="text-white text-sm font-normal">
                <span className="text-primary font-bold">
                  Mazzucato Legnami{" "}
                </span>{" "}
                - italian timber manufacturer, the largest market leader in
                Europe.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex text-center flex-col items-center justify-center gap-4">
              <img src={partenter3} alt="partners" />
              <p className="text-white text-sm font-normal">
                <span className="text-primary font-bold"> Andrea Fanfani</span>{" "}
                creates unique Italian handmade furniture as an extension of
                your interior.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex text-center flex-col items-center justify-center gap-4">
              <img src={partenter4} alt="partners" />
              <p className="text-white text-sm font-normal">
                <span className="text-primary font-bold">Angelo Cappelini</span>{" "}
                reproduces furniture of bygone eras: empire, baroque, rococo and
                many others.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
