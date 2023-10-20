// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "./appliances.css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomeAppliances = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {smartphonesList.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div className="owl-item">
                  <div className="product-card style2ProductCard">
                    <Link>
                      <div className="productImage">
                        <img src={event.imageUrl} alt="" />
                      </div>
                      <div className="card-body">
                        <div className="caption">
                          <h3 className="product-card-title">{event.title}</h3>
                          <div className="condition">
                            <span>Condition:</span> Pre-Loved | Top
                          </div>
                          <div className="pricingBox">
                            <div className="salePrice">
                              <span className="currency">AED</span>
                              <span className="amount">
                                {event.discountPprice}
                              </span>
                            </div>
                            <div className="d-flex text-truncate">
                              <div className="mainPrice">
                                AED {event.originalPrice}
                              </div>
                              <div className="discountPrice">
                                38% less vs. new{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeAppliances;

const smartphonesList = [
  {
    id: 1,
    imageUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/200x0//product/94c3b094-af1b-4288-b6a7-3df481e9f287.jpg",
    title: "Apple iPhone 13  (256GB) 5G - Pink",
    condition: "",
    discountPprice: "AED 2,149.00",
    originalPrice: "AED 2,149.00",
    delivery: "",
  },
  {
    id: 2,
    imageUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/200x0//product/94c3b094-af1b-4288-b6a7-3df481e9f287.jpg",
    title: "Apple iPhone 13  (256GB) 5G - Pink",
    condition: "",
    discountPprice: "AED 2,149.00",
    originalPrice: "AED 2,149.00",
    delivery: "",
  },
  {
    id: 3,
    imageUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/200x0//product/94c3b094-af1b-4288-b6a7-3df481e9f287.jpg",
    title: "Apple iPhone 13  (256GB) 5G - Pink",
    condition: "",
    discountPprice: "AED 2,149.00",
    originalPrice: "AED 2,149.00",
    delivery: "",
  },
  {
    id: 4,
    imageUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/200x0//product/94c3b094-af1b-4288-b6a7-3df481e9f287.jpg",
    title: "Apple iPhone 13  (256GB) 5G - Pink",
    condition: "",
    discountPprice: "AED 2,149.00",
    originalPrice: "AED 2,149.00",
    delivery: "",
  },
  {
    id: 5,
    imageUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/200x0//product/94c3b094-af1b-4288-b6a7-3df481e9f287.jpg",
    title: "Apple iPhone 13  (256GB) 5G - Pink",
    condition: "",
    discountPprice: "AED 2,149.00",
    originalPrice: "AED 2,149.00",
    delivery: "",
  },
  {
    id: 6,
    imageUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/200x0//product/94c3b094-af1b-4288-b6a7-3df481e9f287.jpg",
    title: "Apple iPhone 13  (256GB) 5G - Pink",
    condition: "",
    discountPprice: "AED 2,149.00",
    originalPrice: "AED 2,149.00",
    delivery: "",
  },
  {
    id: 7,
    imageUrl:
      "https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/200x0//product/94c3b094-af1b-4288-b6a7-3df481e9f287.jpg",
    title: "Apple iPhone 13  (256GB) 5G - Pink",
    condition: "",
    discountPprice: "AED 2,149.00",
    originalPrice: "AED 2,149.00",
    delivery: "",
  },
];
