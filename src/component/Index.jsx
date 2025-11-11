import React from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { FaBars, FaSearch, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaUser, FaShoppingCart, FaTruck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";



const categories = [
  {
    title: "BRACELETS",
    img: "/assets/images/catg3.webp",
  },
  {
    title: "CHARMS",
    img: "/assets/images/catg4.webp",
  },
  {
    title: "EARRINGS",
    img: "/assets/images/catg5.webp",
  },
  {
    title: "NECKLACES",
    img: "/assets/images/catg7.webp",
  },
  {
    title: "RINGS",
    img: "/assets/images/catg8.webp",
  },
  {
    title: "CHARMS",
    img: "/assets/images/catg4.webp",
  },
  {
    title: "EARRINGS",
    img: "/assets/images/catg5.webp",
  },
  {
    title: "NECKLACES",
    img: "/assets/images/catg7.webp",
  },
  {
    title: "RINGS",
    img: "/assets/images/catg8.webp",
  },
];


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




const testimonials = [
  {
    id: 1,
    rating: 4,
    title: "Amazing piece of history",
    text: "Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...",
    image: "/assets/images/testimonial1.webp",
    name: "ANN SMITH",
  },
  {
    id: 2,
    rating: 5,
    title: "Fabulous Grounds",
    text: "Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...",
    image: "/assets/images/testimonial.webp",
    name: "SAITAMA ONE",
  },
  {
    id: 3,
    rating: 5,
    title: "Great vineyard tour and tasting!",
    text: "Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...",
    image: "/assets/images/testimonial2.webp",
    name: "SARA COLINTON",
  },
];


const Index = () => {
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
          

            <div className="custom-sec-a">

                <div className="container pt-5">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    // autoplay={{ delay: 3000 }}
                    // loop={true}
                    >
                        <SwiperSlide>
                            <div className="position-relative">
                                <img src="assets/images/banner.jpg" alt="img-1" className="img-fluid" />
                                <div className="custom-banner-text">
                                    <p className="custom-banner-text-heading">Discover a world a  jewelery</p>
                                    <div className="">
                                        <button type="text" className="custom-banner-button" >Explore More</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="position-relative">
                                <img src="assets/images/banner1.jpg" alt="img-1" className="img-fluid" />
                                <div className="custom-banner-text">
                                    <p className="custom-banner-text-heading">Discover the Best of the Best</p>
                                    <div className="">
                                        <button type="text" className="custom-banner-button" >Explore More</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="position-relative">
                                <img src="assets/images/banner2.jpg" alt="img-1" className="img-fluid" />
                               <div className="custom-banner-text">
                                    <p className="custom-banner-text-heading">Oh, Hello Newness!</p>
                                    <div className="">
                                        <button type="text" className="custom-banner-button" >Explore More</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-lg-4">
                    <div className="position-relative">
                   <img src="assets/images/catg.webp" alt="img-1" className="img-fluid" />
                   <div className="custom-category-section">
                   <p className="custom-category-heading p-0">NEW ARRIVALS</p>
                   <p className="custom-category-button">SHOP NOW</p>
                   </div>
                   </div>
                </div>
                 <div className="col-lg-4 overflow-hidden">
                    <div class="img-wrapper position-relative">
                     <img src="assets/images/catg1.webp" alt="img-1" className="img-fluid " />
                      <div className="custom-category-section">
                   <p className="custom-category-heading p-0">NEW ARRIVALS</p>
                   <p className="custom-category-button">SHOP NOW</p>
                   </div>
                </div>
                </div>
                 <div className="col-lg-4">
                    <div  className="position-relative">
                     <img src="assets/images/catg2.webp" alt="img-1" className="img-fluid" />
                      <div className="custom-category-section">
                   <p className="custom-category-heading p-0">NEW ARRIVALS</p>
                   <p className="custom-category-button">SHOP NOW</p>
                   </div>
                </div>
                </div>
            </div>
            </div>



             {/* <div className="top-category-section container">
      <h2 className="tc-heading">TOP CATEGORIES</h2>

      <div className="tc-grid">
        {categories.map((item, index) => (
          <div className="tc-card" key={index}>
            <div className="tc-image-wrapper">
              <img src={item.img} alt={item.title} />
            </div>

            <h4 className="tc-title">{item.title}</h4>
          </div>
        ))}
      </div>
    </div> */}


     <div className="top-category-section container">
      <h2 className="tc-heading">TOP CATEGORIES</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          1200: { slidesPerView: 5 },
          992: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="tc-card">
              <div className="tc-image-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <h4 className="tc-title">{item.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

 

  {/* <section className="trending-products py-5 text-center">
      <div className="container">
        <h2 className="section-title mb-5">TRENDING PRODUCTS</h2>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card product-card border-0 shadow-sm h-100">
                <div className="position-relative">
                  {product.hot && (
                    <span className="badge-custom hot">Hot</span>
                  )}
                  {product.discount && (
                    <span className="badge-custom discount">
                      {product.discount}
                    </span>
                  )}
                  {product.status && (
                    <span className="badge-custom stock">{product.status}</span>
                  )}
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  {product.timer && (
                    <div className="timer-box">{product.timer}</div>
                  )}
                </div>
                <div className="card-body text-center">
                  <p className="product-name mb-1">{product.name}</p>
                  <div className="price mb-2">
                    {product.oldPrice && (
                      <span className="old-price">${product.oldPrice}</span>
                    )}
                    <span className="current-price">${product.price}</span>
                  </div>
                  <small className="text-muted">(0 review)</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}



      <section className="trending-products py-5 text-center">
      <div className="container">
        <h2 className="section-title mb-5">TRENDING PRODUCTS</h2>

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
    </section>


    <div  className="container mb-5">
        <div  className="row">
            
           <div className="col-lg-6">
            <div className="position-relative">
            <img src="/assets/images/banner3.jpg"  alt="img-1" className="img-fluid"/>
            <div  className="custom-baner-section-second">
                <p className="custom-text-discont">20% Discount</p>
                <p className="custom-gold-text">Gold Newlyweds Rings</p>
                <div>
                    <button type="text"  className="custom-button-text">SHOP NOW</button>
                    </div>
            </div>
           </div>
           </div>

            <div className="col-lg-6">
                <div className="position-relative">
            <img src="/assets/images/banner4.jpg"  alt="img-1" className="img-fluid"/>
             <div  className="custom-baner-section-second">
                <p className="custom-text-discont">20% Discount</p>
                <p className="custom-gold-text">Gold Newlyweds Rings</p>
                <div>
                    <button type="text"  className="custom-button-text">SHOP NOW</button>
                    </div>
                    </div>
            </div>
           </div>
        </div>
    </div>



 <section className="testimonials py-5 text-center">
      <div className="container">
        <h2 className="section-title mb-5">TESTIMONIALS</h2>
        <div className="row g-4">
          {testimonials.map((t) => (
            <div key={t.id} className="col-12 col-md-4">
              <div className="testimonial-card p-3 h-100">
                <div className="stars mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < t.rating ? "bi-star-fill text-warning" : "bi-star text-warning"
                      }`}
                    ></i>
                  ))}
                </div>

                <h5 className="testimonial-title mb-3">
                  “{t.title}”
                </h5>

                <p className="testimonial-text mb-4">{t.text}</p>

                <div className="d-flex flex-column align-items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="testimonial-img mb-3"
                  />
                  <h6 className="testimonial-name">{t.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    

        </>
    );
};

export default Index;
