import Image1 from "../../../../assets/frontend/images/categories/1.png";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="container-fluid mb-4">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {heroSlider.map((event) => (
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={event.img} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="title text-center mb-4">Explore Popular Categories</h2>

        <div className="cat-blocks-container">
          <div className="row">
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="/category" className="cat-block">
                <figure>
                  <span>
                    <img src={Image1} alt="Category image" />
                  </span>
                </figure>

                <h3 className="cat-block-title">Computer &amp; Laptop</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="/category" className="cat-block">
                <figure>
                  <span>
                    <img src={Image1} alt="Category image" />
                  </span>
                </figure>

                <h3 className="cat-block-title">Digital Cameras</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="/category" className="cat-block">
                <figure>
                  <span>
                    <img src={Image1} alt="Category image" />
                  </span>
                </figure>

                <h3 className="cat-block-title">Smart Phones</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="/category" className="cat-block">
                <figure>
                  <span>
                    <img src={Image1} alt="Category image" />
                  </span>
                </figure>

                <h3 className="cat-block-title">Televisions</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="/category" className="cat-block">
                <figure>
                  <span>
                    <img src={Image1} alt="Category image" />
                  </span>
                </figure>

                <h3 className="cat-block-title">Audio</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="/category" className="cat-block">
                <figure>
                  <span>
                    <img src={Image1} alt="Category image" />
                  </span>
                </figure>

                <h3 className="cat-block-title">Smart Watches</h3>
              </a>
            </div>
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
