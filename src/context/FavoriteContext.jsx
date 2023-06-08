import React, { useEffect, useState } from 'react'

export const FavoriteContext = React.createContext()

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    fetch('/favorites')
    .then(r => {
      if (r.status === 200) {
        r.json().then(favs => setFavorites(favs))
      }
    })
  }, [])

  function addFavoriteCake(id) {
      fetch('/favorites', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accepts" : "application/json"
        },
        body: JSON.stringify({cake_id: id})
      })
        .then(r=>r.json())
        .then(data => setFavorites([...favorites, data])
        )
    }

    function removeFromFav(id) {
        fetch(`favorites/${id}`, {
            method: "DELETE"
        }).then(r => {
            if (r.status === 204) {
                const updatedFavs = favorites.filter(fav => fav.id !== id)
                setFavorites(updatedFavs)
            }
        })
    }

    const clearFavs = () => {
      setFavorites([])
  }

  return (
    <FavoriteContext.Provider
        value={{ favorites, setFavorites, addFavoriteCake, removeFromFav, clearFavs, }}
    >
        {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider