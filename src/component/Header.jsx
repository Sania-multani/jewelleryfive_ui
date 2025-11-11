import React from 'react'
import { Offcanvas, Button, NavLink } from "react-bootstrap";
import { FaBars, FaSearch, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaUser, FaShoppingCart, FaTruck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {

    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);



    const cartItems = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 49.99,
            quantity: 2,
            // image: "assets/images/west24.jpg", 
            image: `${process.env.PUBLIC_URL}/assets/images/catg3.webp`,
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 89.99,
            quantity: 1,
            // image: "assets/images/west25.jpg",
            image: `${process.env.PUBLIC_URL}/assets/images/catg4.webp`
        },
    ];


    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <>
            <div className="custom-nav-div">
                <nav className=" container navbar-main">
                    <div className="nav-left">
                        <Button variant="link" className="menu-btn" onClick={show ? handleClose : handleShow}>
                            {show ? <FaTimes /> : <FaBars className="text-black fs-5" />}
                        </Button>

                        <img
                            src="assets/images/logo3.png"
                            alt="logo"
                            className="nav-logo"
                        />
                    </div>

                    <div className="nav-center">
                        <div className="search-bar">
                            <input type="text" placeholder="Search for cat food" />
                        </div>
                    </div>

                    <div className="nav-right">
                        <Link to="/login"><FaUser className="icon" /></Link>
                        <div className="cart-icon">
                            <button class="btn "
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight">   <FaShoppingCart size={20} /></button>
                            <span className="cart-badge">0</span>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Offcanvas (top) */}
            <Offcanvas show={show} onHide={handleClose} placement="top" className="nav-offcanvas mt-5">
                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body>
                    <div className="border-top"></div>
                    <ul className="offcanvas-links">
                        <li><a href="/">Home</a></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>




            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart Page</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {cartItems.map((item) => (
                        <div className="cart-item d-flex mb-3" key={item.id}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-img me-3"
                            />
                            <div className="flex-grow-1">
                                <h6 className="mb-1">{item.name}</h6>
                                <p className="mb-0 text-muted">
                                    Qty: {item.quantity} × Rs.{item.price.toFixed(2)}
                                </p>
                                <p className="mb-0 fw-bold">
                                    Total: Rs.{(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <button className="cstm-cros-btn">
                                x
                            </button>
                        </div>
                    ))}

                    <hr />
                    <h5 className="text-end">Grand Total: Rs.{total.toFixed(2)}</h5>

                    <Link to="/cart" className="btn cstm-check-cart w-100 p-2 mt-3">Checkout
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header