import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ReviewContext } from '../../context/ReviewContext';
import { CakeContext } from '../../context/CakeContext';
import ReviewCard from './ReviewCard'
import CakeCard from './../cakes/CakeCard';
import "./review.css"

function Review({}) {

  const { cakeId } = useParams()
  const { reviews, getReviewsByCakeId } = useContext(ReviewContext);
  const { reviewCake, getReviewCakeByCakeId } = useContext(CakeContext);
  
  console.log(reviewCake)
  
  useEffect( () => {
    getReviewsByCakeId(cakeId)
  }, [])

  useEffect( () => {
    getReviewCakeByCakeId(cakeId)
  }, [])

  

  if (reviews.length === 0) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }
  
  const {image, name} = reviewCake

  return (
    <div className='container'>
      <h1> Reviews</h1>
      <img id = 'cake-image'src = {image}></img>
      <h1>{name}</h1>
      {reviews.map( review => <ReviewCard key={review.id} review={review}/>)}
    </div>
  )
}

export default Review
