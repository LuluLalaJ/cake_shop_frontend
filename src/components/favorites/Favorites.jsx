import React from 'react'

function Favorites({favorite}) {

  console.log('inside fav', favorite)
  if (favorite.length === 0) {
    return (
      <div className='container'>
        <h1>You don't have any favorites yet!</h1>
      </div>
    )
  }

  // const renderFav = favorite.map( fav => {
  //   const cake = fav.cake
  //   return (
  //     <>
  //       <p>{cake.name}</p>
  //       <img src={cake.image}/>
  //     </>
  //   )
  // })

  return (
    <div className='container'>
        <h1>Here are your favorites</h1>
        {/* {renderFav} */}
    </div>
  )
}

export default Favorites
