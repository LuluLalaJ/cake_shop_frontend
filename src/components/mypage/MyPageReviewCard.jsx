import React, { useState} from 'react'
import ReviewForm from '../reviews/ReviewForm';

function MyPageReviewCard({review, deleteReviewByReviewId, editReviewByReviewId}) {
 const {created_at, updated_at, cake: {name}, content, id} = review
 const [showEditForm, setShowEditForm] = useState(false);


 function editReview(reviewId, content) {
    editReviewByReviewId(reviewId, content)
    setShowEditForm(false)
 }

  return (
    <div >
      <h3>- Created: {created_at} </h3>
      {updated_at && <li>• Updated: {updated_at}</li>}
      <li>• Cake: {name} </li>
      <li>• Review: {content} </li>
      <button className="btn" onClick={()=>deleteReviewByReviewId(id)}>Delete the review</button>



    <button className="btn" onClick={()=> setShowEditForm(!showEditForm)}>
        {showEditForm
        ? 'Close the form'
        : 'Edit the review'}
    </button>
    {showEditForm && <ReviewForm
        reviewId={id}
        content={content}
        submitReview={editReview}
    />}

    </div>
  )
}

export default MyPageReviewCard
