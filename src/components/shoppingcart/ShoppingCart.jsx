import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext';
import './shoppingcart.css'


function ShoppingCart() {
  const { user } = useContext(UserContext);
  const { cartItems, clearCart } = useContext(CartContext);

  console.log('localstorage', cartItems)

  if (!user) {
    return (
      <div className="container">
        <h1>You're not logged in yet!</h1>
        <h2><Link to="/login">Log in</Link> to shop cakes!</h2>
      </div>
    )
  }
  if (user && cartItems.length === 0) {
    return (
      <div className="container">
        <h1>Your cart is empty!</h1>
        <h2>Let's<Link to="/cakes"> add </Link>some cakes</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <section className="cart-container">
      <h1>Shopping Cart</h1>
      </section>
      <button className='btn'onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default ShoppingCart
