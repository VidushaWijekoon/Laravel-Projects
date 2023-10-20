// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./hero.css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import MessageBar from "../MessageBar/MessageBar";

const Hero = () => {
  return (
    <>
      <MessageBar />
      <div className="container-fluid mb-4">
        <div className="text-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {heroSlider.map((event) => (
              <SwiperSlide key={event.id}>
                <img src={event.img} alt={event.id} className="rounded-4" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="style2BannerTopSection text-center">
          <div className="row">
            {heroBottom.map((e) => (
              <div className="col-lg-3 col-sm-6" key={e.id}>
                <div className="home-topBanner-sec">
                  <img
                    src={e.imgUrl}
                    alt={e.id}
                    className="img-fluid w-100 rounded-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const heroSlider = [
  {
    id: 1,
    img: "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/1290x0/web-banners/5faa74392aabf3167c32b71c6dbee51e.png",
  },
  {
    id: 2,
    img: "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/1290x0/web-banners/a7bd74066a670aebbc0e45dbd41c2f12.png",
  },
  {
    id: 3,
    img: "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/1290x0/web-banners/f06ce228d77b705e818bf71fd96bba9d.png",
  },
  {
    id: 4,
    img: "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/1290x0/web-banners/f1c39fc3007d53322565cad72dce7114.png",
  },
  {
    id: 5,
    img: "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/1290x0/web-banners/f6deeecff12e8e47d9fce4a3252cd115.png",
  },
  {
    id: 6,
    img: "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/1290x0/web-banners/cd660c2905a621a5711c2bfd5f2f800e.png",
  },
];

const heroBottom = [
  {
    id: 1,
    imgUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/slider/987b390898d27ce3cea691e9e32bd2b7.png",
  },
  {
    id: 2,
    imgUrl:
      " https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/slider/9c7af442462425eeef685da40be32304.png",
  },
  {
    id: 3,
    imgUrl:
      " https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/slider/b3a0d21a0d41adbea88e8dc04ffcef3e.png",
  },
  {
    id: 4,
    imgUrl:
      " https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/slider/b9636a032afcade95013583b55cee6c2.png",
  },
];
