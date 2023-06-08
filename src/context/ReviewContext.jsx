import React, { useEffect, useState } from 'react'

export const ReviewContext = React.createContext()

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  function getReviewsByCakeId(cakeId) {
    fetch( `/cakes/reviews/${cakeId}`)
    .then( r => {
      if (r.status === 200) {
        r.json()
        .then(data => setReviews(data))
      }
    })
  }

  function getReviewByUserId(userId) {
    fetch(`/users/reviews/${userId}`)
        .then(r => {
        if (r.status === 200) {
          r.json()
          .then(data => setReviews(data))
      }
    })
  }


    function deleteReviewByReviewId(id) {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        }).then(r => {
            if (r.status === 204) {
                const updatedReviews = reviews.filter(review => review.id !== id)
                setReviews(updatedReviews)
            }
        })
    }

    function submitReviewByCakeId(id, content) {

      const review = {
        'cake_id': id,
        'content': content
      }

      fetch('/reviews', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review)
      }).then(res => {
        if (res.status === 201) {
          res.json().
          then(data => setReviews([...reviews, data]))
        }
      })
    }

    function editReviewByReviewId(id, content) {
      const review = {
        'content': content
      }

      fetch(`/reviews/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review)
      }).then(res => {
        if (res.status === 200) {
          res.json().
          then( data => {
            console.log(data)
            const updatedReviews = reviews.map( review => {
              if (review.id === data.id) {
                return data
              }
              return review
            })
          setReviews(updatedReviews)
          })
        }
      })
    }



  return (
    <ReviewContext.Provider
        value={{ reviews, getReviewByUserId, getReviewsByCakeId, deleteReviewByReviewId, editReviewByReviewId, submitReviewByCakeId}}
    >
        {children}
    </ReviewContext.Provider>
  )
}

export default ReviewProvider
