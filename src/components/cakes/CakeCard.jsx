import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Figure from 'react-bootstrap/Figure'
import './cakes.css'
import { CartContext } from '../../context/CartContext'
import { FavoriteContext } from '../../context/FavoriteContext'


function CakeCard({cake}) {
  const { addToCart } = useContext(CartContext);
  const { addFavoriteCake } = useContext(FavoriteContext);
  const [isShort, setIsShort] = useState(true)

  return (
    <Figure className="cake-card">
      <Figure.Image
        src={cake.image}
        className='cake-image'
        />
      <Figure.Caption className='cake-info'>
        <h2>{cake.name} </h2>
        <h3>$ {cake.price} </h3>
        {isShort
        ? <p>{cake.description.slice(0,150)}... </p>
        : <p>{cake.description}</p>
        }
        <button onClick={()=>setIsShort(!isShort)} className='btn'>
          {isShort
          ? "Read more"
          : "Read less"}
        </button>

      </Figure.Caption>
      <br></br>

      <button className='btn' onClick={(e)=>addToCart(cake)}>Add to Cart</button>
      <button className='btn' onClick = {() => addFavoriteCake(cake.id)} >Add to Favorites</button>
      <br/>
      <h3><Link to={`/reviews/${cake.id}`}>Reviews</Link></h3>
    </Figure>
  )
}

export default CakeCard
