import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext';
import { AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'
import './shoppingcart.css'


function ShoppingCart() {
  const { user } = useContext(UserContext);
  const { cartItems, clearCart,
    addToCart, removeFromCart, submitOrder,
    submitted
  } = useContext(CartContext);



  if (!user) {
    return (
      <div className="container">
        <h1>You're not logged in yet!</h1>
        <h2><Link to="/login">Log in</Link> to shop cakes!</h2>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className='container'>
        <h1>Your order was submitted successfully!</h1>
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

  const renderCakesInCart = cartItems.map( (cake, index) =>
    <div key={cake.cake_id}>
      <span>{index + 1}. {cake.name} </span>
      <img className="cart-cake-img" src={cake.image} alt={cake.name}/>
      <p>
        Quantity:
        <AiFillMinusCircle onClick={()=>removeFromCart(cake)}/>
        {cake.quantity}
        <AiFillPlusCircle onClick={()=>addToCart(cake)}/>
      </p>
      <span>Unit Price: ${cake.price} </span>
      <span>Sub-Total: ${ (cake.quantity * cake.price).toFixed(2) }</span>
    </div>
  )

  const orderTotal = cartItems.reduce( (total, currentCake) =>
    total + currentCake.price * currentCake.quantity, 0)

  return (
    <div className="container">
      <section className="cart-container">
      <h1>Shopping Cart</h1>
      {renderCakesInCart}
      </section>
      <p>Order Total: ${orderTotal.toFixed(2)}</p>
      <button className='btn'onClick={clearCart}>Clear Cart</button>
      <button className='btn'onClick={submitOrder}>Submit Order</button>
    </div>
  )
}

export default ShoppingCart
