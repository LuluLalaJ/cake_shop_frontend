
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { ReviewContext } from '../../context/ReviewContext';
import ReviewForm from './ReviewForm';

function ReviewCard({review}) {

  const { user } = useContext(UserContext);
  const {cake: {name}, content, user: {username}, id} = review
  const { deleteReviewByReviewId, editReviewByReviewId} = useContext(ReviewContext)

  const [editable, setEditable] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false);
  function editReview(reviewId, content) {
    editReviewByReviewId(reviewId, content)
    setShowEditForm(false)
 }



  //useEffect prevents infinite rerendering;
  useEffect(() => {
    if (user && user.username === username) {
      setEditable(true);
    } else {
      setEditable(false)
    }
  }, [user, username]);

  return (
    <div>
        <h2>{username}: </h2>
        <p>{content}</p>
        {editable
        ?
        <>
            <button className="btn" onClick={()=>deleteReviewByReviewId(id)}>Delete my review</button>
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
        </>
        : null}
    </div>
  )
}

export default ReviewCard
