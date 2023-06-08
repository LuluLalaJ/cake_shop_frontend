import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ReviewContext } from '../../context/ReviewContext';
import ReviewCard from './ReviewCard'

function Review() {
  const { cakeId } = useParams()
  const { reviews, getReviewsByCakeId } = useContext(ReviewContext);

  useEffect( () => {
    getReviewsByCakeId(cakeId)
  }, [])

  if (reviews.length === 0) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  console.log('inside review component', reviews)
  return (
    <div className='container'>
      <h1>Reviews</h1>
      {reviews.map( review => <ReviewCard key={review.id} review={review}/>)}
    </div>
  )
}

export default Review
