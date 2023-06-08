import React, { useEffect, useContext, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { ReviewContext } from '../../context/ReviewContext';
import { CakeContext } from '../../context/CakeContext';
import ReviewCard from './ReviewCard'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
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

  const {image, name} = reviewCake

  return (
    <div className='container'>
      <h1> Reviews</h1>
      <img id = 'cake-image'src = {image}></img>
      <h1>{name}</h1>
      {reviews.length === 0 && <h2>No one has reviewed this cake yet!</h2>}
      <Link to = {`/cakes`}><button className='btn' >Back To Cakes</button></Link>
      {reviews.map( review => <ReviewCard key={review.id} review={review}/>)}
    </div>
  )
}

export default Review
