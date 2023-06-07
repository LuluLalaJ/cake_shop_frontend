import React from 'react'
import CakeCard from '../cakes/CakeCard';

function Favorites({favorite, cakes}) {
  console.log(favorite)
  // const filterFavorites = cakes.filter(cake => favorite.includes(cake.id))
  
  if (favorite.length !== 0) {
    const renderFavCakes = favorite.map(cake => <div>{cake.name}</div>)
    return ( <div> {renderFavCakes} </div> )
  }
  
    // <CakeCard
    //       key = { cake.id }
    //       cake = { cake }
    //     />)
  
  return (
    <div>
      {/* {renderFavCakes} */}
      "Hello"
    </div>
  )
}

export default Favorites
