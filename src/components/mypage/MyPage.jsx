import React, { useContext, useEffect, useState }from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../context/UserContext';
import { ReviewContext } from '../../context/ReviewContext';
import PastOrderCard from './PastOrderCard'

import './mypage.css'

function MyPage() {
  const { user, refresh} = useContext(UserContext);
  const { reviews, deleteReviewByReviewId, getReviewByUserId } = useContext(ReviewContext)
  const [ orders, setOrders ]= useState([])

  useEffect( () => {
    if (user) {
      fetch(`/users/orders/${user.id}`)
        .then(r => {
        if (r.status === 200) {
          r.json()
          .then(data => setOrders(data))
      }
    })
    }
  }, [user])


  const renderPastOrders = orders.map( (order, index) => (
    <PastOrderCard key={index} order={order}/>
  ))

  useEffect( () => {
    if (user) {
     getReviewByUserId(user.id)
    }
  }, [user])

  console.log(reviews)

  const renderReviews = reviews.map ( review =>
    <div key={review.id}>
      <h3>- Created: {review.created_at} </h3>
      <li>• Cake: {review.cake.name} </li>
      <li>• Review: {review.content} </li>
      <button className="btn" onClick={()=>deleteReviewByReviewId(review.id)}>Delete the review</button>

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
        {reviews.length === 0
        ? <h3>You didn't write any reviews!</h3>
        : renderReviews
        }
      </section>
    </div>
  )
}

export default MyPage
