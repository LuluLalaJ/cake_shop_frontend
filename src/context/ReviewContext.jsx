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

  // useEffect(() => {
  //   fetch('/favorites')
  //   .then(r => {
  //     if (r.status === 200) {
  //       r.json().then(favs => setFavorites(favs))
  //     }
  //   })
  // }, [])

  // function addFavoriteCake(id) {
  //     fetch('/favorites', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accepts" : "application/json"
  //       },
  //       body: JSON.stringify({cake_id: id})
  //     })
  //       .then(r=>r.json())
  //       .then(data => setFavorites([...favorites, data])
  //       )
  //   }

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


  return (
    <ReviewContext.Provider
        value={{ reviews, getReviewsByCakeId, deleteReviewByReviewId}}
    >
        {children}
    </ReviewContext.Provider>
  )
}

export default ReviewProvider
