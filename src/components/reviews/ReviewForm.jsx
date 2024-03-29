import React, { useState, useEffect } from 'react';
import './review.css'
function ReviewForm({ cakeId, reviewId, content, submitReview }) {
  const [review, setReview] = useState(content);

  useEffect( () => {
    setReview(content)
  }, [content])

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    if (reviewId) {
      submitReview(reviewId, review)
    } else {
      submitReview(cakeId, review);
    }

    setReview('');
  };

  return (
    <form onSubmit={handleReviewSubmit}>
      <textarea className='review-textarea'
        value={review}
        onChange={(event) => setReview(event.target.value)}
        placeholder="Write your review"
      ></textarea>
      <button type="submit" className='btn'>
        {reviewId
        ? 'Update Review'
        : 'Submit Review'
        }
      </button>
    </form>
  );
}


export default ReviewForm


// import React, { useState } from 'react';
// import './review.css'
// function ReviewForm({ cakeId, submitReview }) {
//   const [review, setReview] = useState('');
//   const handleReviewSubmit = (event) => {
//     event.preventDefault();
//     submitReview(cakeId, review);
//     setReview('');
//   };

//   return (
//     <form onSubmit={handleReviewSubmit}>
//       <textarea className='review-textarea'
//         value={review}
//         onChange={(event) => setReview(event.target.value)}
//         placeholder="Write your review"
//       ></textarea>
//       <button type="submit" className='btn'>Submit Review</button>
//     </form>
//   );
// }


// export default ReviewForm
