import React, { useContext, useEffect, useState }from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../context/UserContext';
import './mypage.css'

function MyPage() {
  const { user, refresh} = useContext(UserContext);
  const [ orders, setOrders ]= useState([])


  useEffect( () => {
    if (user) {
      fetch(`/cakes/orders/${user.id}`)
        .then(r => {
        if (r.status === 200) {
          r.json()
          .then(data => setOrders(data))
      }
    })
    }
  }, [user])

  const renderPastOrders = orders.map( order =>
      <div key={order.id}>
        <h3>- Order created: {order.created_at.slice(0, -3)}
        </h3>
        {order.order_cakes.map( (order, index) => <div key={index}>
            <li className='past-order-info'>• Cake: {order.cake.name} |
            Quantity: {order.quantity} </li>
          </div>)}
        <p> Total: $ {order.total_price}</p>
      </div>


  )

  if (!user) return (
    <Redirect to="/login" />
  )

  return (
    <div className="container">
      <h1>Welcome Back {user.username}!</h1>
      <section className="order-conatiner">
        <h2>Your past orders:</h2>
        {orders.length === 0
        ? <h3>You don't have any past orders!</h3>
        : renderPastOrders
        }
      </section>
      <section className="review-conatiner">
        <h2>All your reviews:</h2>
      </section>
    </div>
  )
}

export default MyPage
