import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {


    const initialCartItems = [
  {
    id: 1,
    name: 'Casual Shirt',
    price: 49.99,
    quantity: 2,
    image:`${process.env.PUBLIC_URL}/assets/images/catg3.webp`,
  },
  {
    id: 2,
    name: 'Casual Shirt',
    price: 89.99,
    quantity: 1,
     image:`${process.env.PUBLIC_URL}/assets/images/catg4.webp`,
  },
];

    
  const [cartItems, setCartItems] = useState(initialCartItems);

//   const handleRemove = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };



  return (
    <>
      <div  className='container'>
    <p  className='custom-contact-text'>Cart</p>
   </div>

    


       <div className="cart-page container mt-5">
      <h2 className="mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item row align-items-center mb-3 p-3 border rounded">
              <div className="col-md-2">
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-4">
                <h5>{item.name}</h5>
              </div>
              <div className="col-md-2">
                <p>Qty: {item.quantity}</p>
              </div>
              <div className="col-md-2">
                <p>Rs.{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger w-100"
                //   onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <div className="text-end">
            <h4>Total: Rs.{getTotal()}</h4>
            <Link to="/checkout" className='cstm-cart-link'>
            <button className="btn cstm-proc mt-3 mb-5">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
    </>
  )
}

export default Cart