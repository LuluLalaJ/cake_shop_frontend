import React, { useContext } from 'react'
import './favorites.css'
import { FavoriteContext } from '../../context/FavoriteContext';
import { CartContext } from '../../context/CartContext'
import Figure from 'react-bootstrap/Figure'


function FavoriteCard({ fav_id, cake, index}) {
  const { removeFromFav } = useContext(FavoriteContext);
  const {image, name, price} = cake
  const { addToCart } = useContext(CartContext);
  

  return (
    <div className='fav-container'>

      <Figure className="fav-card">
        <Figure.Image
          src={image}
          alt={name}
          className='fav-image'
          />
        <Figure.Caption className='fav-info'>
          <h2>{index}. {cake.name}</h2>
          <br></br>
          <h3>$ {price} </h3>
          <br></br>
          <button className="btn" onClick={()=>removeFromFav(fav_id)}>Remove From Favorites</button>
          <button className='btn' onClick={(e)=>addToCart(cake)}>Add to Cart</button>
        </Figure.Caption>
      <br></br>
      {/* <h3><Link to={`/reviews/${cake.id}`}>Reviews</Link></h3> */}

      </Figure>
        
    </div>
  )
}

export default FavoriteCard
