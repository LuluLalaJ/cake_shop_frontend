import React, { useContext } from 'react';
import FavoriteCard from './FavoriteCard';
import { FavoriteContext } from '../../context/FavoriteContext';

function Favorites() {
  const { favorites } = useContext(FavoriteContext);

  if (favorites.length === 0) {
    return (
      <div className='container'>
        <h1>You don't have any favorites yet!</h1>
      </div>
    )
  }

  const renderFav = favorites.map( (fav, index) => <FavoriteCard key={fav.id} cake={fav.cake} fav_id = {fav.id} index={index + 1}/>)

  return (
    <div className='container'>
        <h1>Here are your favorites</h1>
        {renderFav}
    </div>
  )
}

export default Favorites
