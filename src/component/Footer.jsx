import React from 'react'

const Footer = () => {
  return (

    <>
      <footer className="footer text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-12 col-md-6 col-lg-3">
            {/* <h5 className="footer-title mb-3">LUXE JEWELS</h5> */}
            <p className="footer-text">
              Discover timeless elegance with our handcrafted jewellery — where
              every piece tells your story of beauty and grace.
            </p>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-md-6 col-lg-3">
            <h6 className="footer-heading mb-3">Customer Service</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-6 col-lg-3">
            <h6 className="footer-heading mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="footer-heading mb-3">Join Our Newsletter</h6>
            <p className="footer-text">
              Be the first to know about exclusive offers and new arrivals.
            </p>
            <form className="newsletter-form d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              {/* <button type="submit" className="btn btn-light">
                <i className="bi bi-send"></i>
              </button> */}
            </form>

            {/* Social Icons */}
            <div className="social-icons mt-3">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="text-center footer-bottom">
          <p className="mb-0">
            © {new Date().getFullYear()}  All Rights Reserved @Axepert Exhibit Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer