import React, { useContext, useEffect, useState }from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../context/UserContext';
import { ReviewContext } from '../../context/ReviewContext';
import PastOrderCard from './PastOrderCard'
import MyPageReviewCard from './MyPageReviewCard';

import './mypage.css'

function MyPage() {
  const { user, refresh} = useContext(UserContext);
  const { reviews, deleteReviewByReviewId, getReviewByUserId, editReviewByReviewId } = useContext(ReviewContext)
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

  const renderReviews = reviews.map ( review =>
      <MyPageReviewCard key={review.id}
      review={review}
      deleteReviewByReviewId={deleteReviewByReviewId}
      editReviewByReviewId={editReviewByReviewId}/>
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
