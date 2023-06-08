import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ReviewContext } from '../../context/ReviewContext';
import { CakeContext } from '../../context/CakeContext';
import ReviewCard from './ReviewCard'
import CakeCard from './../cakes/CakeCard';

function Review({}) {

  const { cakeId } = useParams()
  const { reviews, getReviewsByCakeId } = useContext(ReviewContext);
  const { getReviewCakeByCakeId } = useContext(CakeContext);
  
  
  useEffect( () => {
    getReviewsByCakeId(cakeId)
  }, [])

  useEffect( () => {
    getReviewCakeByCakeId(cakeId)
  }, [])

  

  // const renderReviewCake = reviewCake.map(cake => 
  //   <CakeCard
  //     key = { cake.id }
  //     cake = { cake }
  // />)

  if (reviews.length === 0) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className='container'>
      <h1> Reviews</h1>
      {/* {renderReviewCake} */}
      {reviews.map( review => <ReviewCard key={review.id} review={review}/>)}
    </div>
  )
}

export default Review
