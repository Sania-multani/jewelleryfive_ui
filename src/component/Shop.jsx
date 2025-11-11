import React from 'react'
import { FaHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Shop = () => {

  const categories = [
  {
    title: "BRACELETS",
    img: "assets/images/catg3.webp",
  },
  {
    title: "EARRINGS",
    img: "assets/images/catg4.webp",
  },
  {
    title: "NECKLACES",
    img: "assets/images/catg5.webp",
  },
  {
    title: "SHOP EARRINGS",
    img: "assets/images/catg7.webp",
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


  return (
    <>
    {/* <div className='container-fluid'>
       <div className='custom-shop-banner-img'></div>
    </div> */}

  <div className='position-relative'>
    <div className="shop-banner">
        <div className="shop-banner-content">
          <h1>Shop</h1>
          <p>Home &nbsp; › &nbsp; Shop</p>
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className="container category-section ms-4 ">
        <div className="row justify-content-center g-0">
          {categories.map((item, index) => (
            <div className="col-6 col-md-2 text-center mb-4  " key={index}>
              <div className="category-circle border border-dark">
                <img src={item.img} alt={item.title} />
              </div>
              <p className="category-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>



      <div className="shop-container">
        {/* ---------------- LEFT SIDEBAR ---------------- */}
        <aside className="sidebar">
          <h2 className="side-title">CATEGORIES</h2>
          <ul className="side-list">
            <li>Bracelets (3)</li>
            <li>Earrings (5)</li>
            <li>Necklaces (4)</li>
            <li>Shop Earrings (14)</li>
            <li>Wedding & Bridal (5)</li>
          </ul>

          <h2 className="side-title">PRICE</h2>
          <div className="price-box">
            <input type="range" min="30" max="1200" />
            <p>Range: Rs.30 – Rs.1200</p>
          </div>

          <h2 className="side-title">COLOR</h2>
          <ul className="color-list">
            <li><span className="c black"></span>Black (4)</li>
            <li><span className="c blue"></span>Blue (1)</li>
            <li><span className="c green"></span>Green (4)</li>
            <li><span className="c pink"></span>Pink (1)</li>
            <li><span className="c red"></span>Red (2)</li>
          </ul>

          <h2 className="side-title">BRANDS</h2>
          <div className="brand-grid">
            <img src="assets/images/shop1.webp" alt="Brand" />
            <img src="assets/images/shop2.webp" alt="Brand" />
            <img src="assets/images/shop3.webp" alt="Brand" />
            <img src="assets/images/shop4.webp" alt="Brand" />
            <img src="assets/images/shop5.webp" alt="Brand" />
            <img src="assets/images/shop1.webp" alt="Brand" />
          </div>
        </aside>

        {/* ---------------- PRODUCT SECTION ---------------- */}
        <main className="product-area">
          <p className="count">Showing 1–12 of 29 item(s)</p>

          {/* <div className="product-grid">
            {products.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="img-box">
                  {p.badge && <span className="badge">{p.badge}</span>}
                  <img src={p.image} alt={p.title} />

                  <div className="hover-icons">
                    <FaShoppingBag />
                    <FaHeart />
                    <FaSearch />
                  </div>
                </div>

                <h3 className="title">{p.title}</h3>
                <p className="price">
                  {p.oldPrice && <span className="old">{p.oldPrice}</span>}
                  {p.price}
                </p>
              </div>
            ))}
          </div> */}

            <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-5">
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
               <Link to="/detail">   <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  /></Link>

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
        </main>
      </div>
    </>
  )
}

export default Shop