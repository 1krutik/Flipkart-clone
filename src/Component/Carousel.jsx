

const Carousel = () => {




  return (
   <>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
        >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78e89d02375d5222.jpg?q=20"
              className="d-block"
              alt="..."
              />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20"
              className="d-block "
              alt="..."
              />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20"
              className="d-block "
              alt="..."
              />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
