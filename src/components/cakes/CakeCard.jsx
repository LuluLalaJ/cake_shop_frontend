import React, { useContext } from 'react'
import Figure from 'react-bootstrap/Figure'
import './cakes.css'
import { CartContext } from '../../context/CartContext'
import { FavoriteContext } from '../../context/FavoriteContext';



function CakeCard({cake}) {
  const { addToCart } = useContext(CartContext);
  const { addFavoriteCake } = useContext(FavoriteContext);


  return (
    <Figure className="cake-card">
      <Figure.Image
        src={cake.image}
        className='cake-image'
        />
      <Figure.Caption className='cake-info'>
        <h2>{cake.name} </h2>
        <h3>$ {cake.price} </h3>
        <p>{cake.description} </p>
      </Figure.Caption>
      <br></br>

      <button className='btn' onClick={(e)=>addToCart(cake)}>Add to Cart</button>
      <button className='btn' onClick = {() => addFavoriteCake(cake.id)} >Add to Favorites</button>

    </Figure>
  )
}

export default CakeCard
