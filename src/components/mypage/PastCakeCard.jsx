import React, { useState, useContext } from 'react';
import { ReviewContext } from '../../context/ReviewContext';
import ReviewForm from '../reviews/ReviewForm';

function PastCakeCard({order}) {
 const {cake: {id}, cake: {name}, quantity} = order
 const [showReviewForm, setShowReviewForm] = useState(false);
 const { submitReviewByCakeId } = useContext(ReviewContext);



 const submitReview = (id, content) => {
    submitReviewByCakeId(id, content)
    setShowReviewForm(false)
 }

  return (
    <div>
        <ul className='past-order-info'>
            <li>• Cake: {name} </li>
            <button className='btn' onClick={()=> setShowReviewForm(!showReviewForm)}>
                {showReviewForm
                ? 'Close the form'
                : 'Review this cake'}
            </button>
            <li>Quantity: {quantity} </li>
        </ul>
        {showReviewForm && <ReviewForm
        cakeId={id}
        submitReview={submitReview}
        />}
    </div>

  )
}

export default PastCakeCard
