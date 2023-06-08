import React, { useContext } from 'react'
import { FavoriteContext } from '../../context/FavoriteContext';


function FavoriteCard({ fav_id, cake, index}) {
  const { removeFromFav } = useContext(FavoriteContext);
  const {image, name, price} = cake

  return (
    <div className='container'>
        <img src={image} atl={name}/>
        <p> {index}. {cake.name}</p>
        <button className="btn" onClick={()=>removeFromFav(fav_id)}>remove from favorites</button>
        
    </div>
  )
}

export default FavoriteCard
