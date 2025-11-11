import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Details = () => {

    const products = [
 
   {
    id: 1,
    name: "LARGE CHARLOTTE HOOPS",
    price: 214.22,
      oldPrice: 135.0,
    status: "Out Of Stock",
    image: "/assets/images/prodt.webp",
  },
  {
    id: 2,
    name: "CROISSANT DOME HOOPS",
    price: 100.0,
      oldPrice: 135.0,
    hot: true,
    image: "/assets/images/prodt1.webp",
  },
  {
    id: 3,
    name: "LES TEXTURED HOOPS",
    price: 79.0,
      oldPrice: 135.0,
    hot: true,
    image: "/assets/images/prodt2.webp",
  },
  {
    id: 4,
    name: "MEDIUM TUBE HOOPS",
    price: 115.0,
    oldPrice: 135.0,
    discount: "-15%",
    hot: true,
    timer: "630d : 15h : 35m : 02s",
    image: "/assets/images/prodt4.webp",
  },
];


  const [selectedImage, setSelectedImage] = useState(
    `${process.env.PUBLIC_URL}/assets/images/detail.webp`
  );

  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 627,
    hours: 15,
    minutes: 34,
    seconds: 16,
  });

  // Countdown simulation (for demo)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleQuantityChange = (type) => {
    if (type === "inc") setQuantity(quantity + 1);
    else if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
    <section className="product-details-section">
      <div className="product-container">
        {/* Left side - Image gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={selectedImage} alt="Product" />
          </div>
          <div className="thumbnail-row">
            {[
              "detail.webp",
              "detail1.webp",
              "detail2.webp",
            ].map((img, idx) => (
              <img
                key={idx}
                src={`${process.env.PUBLIC_URL}/assets/images/${img}`}
                alt="thumbnail"
                className={`thumbnail ${
                  selectedImage.endsWith(img) ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedImage(`${process.env.PUBLIC_URL}/assets/images/${img}`)
                }
              />
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div className="product-info">
          <nav className="breadcrumb">
            Home / Shop / Shop Earrings / <span>Bold Hoops</span>
          </nav>

          <h2 className="product-title">Bold Hoops</h2>

          <div className="product-pricing">
            <span className="old-price">Rs.120.00</span>
            <span className="new-price">Rs.100.00</span>
            <span className="discount">-17%</span>
          </div>

          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>

          <div className="deal-countdown">
            <p className="hurry-text">
              <i className="fa fa-clock"></i> Hurry up! Deal ends in:
            </p>
            <div className="timer">
              <div className="time-box">
                <h4>{timeLeft.days}</h4>
                <p>Days</p>
              </div>
              <div className="time-box">
                <h4>{timeLeft.hours}</h4>
                <p>Hours</p>
              </div>
              <div className="time-box">
                <h4>{timeLeft.minutes}</h4>
                <p>Mins</p>
              </div>
              <div className="time-box">
                <h4>{timeLeft.seconds}</h4>
                <p>Secs</p>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange("dec")}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange("inc")}>+</button>
            </div>
            <button className="btn add-to-cart">Add to Cart</button>
            <button className="btn buy-now">Buy Now</button>
          </div>

          <div className="product-meta">
            <p>
              Category: <span>Shop Earrings</span>
            </p>
            <p>
              Brand: <span>Brand 4</span>
            </p>
            <p>
              Share:
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

<div  className="container mt-5">
      <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
              <div className="card product-card border-0 shadow-sm h-100">
                <div className="position-relative">
                  {/* Badges */}
                  {product.hot && <span className="badge-custom hot">Hot</span>}
                  {product.discount && (
                    <span className="badge-custom discount">
                      {product.discount}
                    </span>
                  )}
                  {product.status && (
                    <span className="badge-custom stock">
                      {product.status}
                    </span>
                  )}

                  {/* Product Image */}
                <Link to="/detail"> <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
</Link> 
                  {/* Timer */}
                  {product.timer && (
                    <div className="timer-box">{product.timer}</div>
                  )}

                   <button className="add-to-cart-btn">ADD TO CART</button>
                </div>

                {/* Product Info */}
                <div className="card-body text-center">
                  <p className="product-name mb-1">{product.name}</p>

                  <div className="price mb-2">
                    {product.oldPrice && (
                      <span className="old-price">Rs.{product.oldPrice}</span>
                    )}
                    <span
                      className={`current-price ${
                        product.oldPrice ? "discounted" : ""
                      }`}
                    >
                      Rs.{product.price}
                    </span>
                  </div>

                  {/* <small className="text-muted">(0 review)</small> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </>
  );
};

export default Details;
