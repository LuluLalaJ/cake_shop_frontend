import React, { useContext, useState, useEffect } from 'react'
import './favorites.css'
import { FavoriteContext } from '../../context/FavoriteContext';
import { CartContext } from '../../context/CartContext'
import Figure from 'react-bootstrap/Figure'


function FavoriteCard({ fav_id, cake, index}) {
  const { removeFromFav } = useContext(FavoriteContext);
  const {image, name, price} = cake
  const { addToCart } = useContext(CartContext);
  const [addToCartAlert, setAddToCartAlert] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddToCartAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [addToCartAlert])

  function handleAddToCart(cake) {
    addToCart(cake)
    setAddToCartAlert(true)
  }

  return (
    <div className='cake-container'>


      <Figure className="cake-card">
        <Figure.Image
          src={image}
          alt={name}
          className='cake-image'
          />
        <Figure.Caption className='cake-info'>
          <h2>{index}. {cake.name}</h2>
          <br></br>
          <h3>$ {price} </h3>
          <br></br>
          <button className="btn" onClick={()=>removeFromFav(fav_id)}>Remove From Favorites</button>
          <button className='btn' onClick={(e)=>handleAddToCart(cake)}>Add to Cart</button>
        </Figure.Caption>
        {addToCartAlert && <p className='alert'>Added to cart</p>}

      <br></br>
      {/* <h3><Link to={`/reviews/${cake.id}`}>Reviews</Link></h3> */}

      </Figure>

    </div>
  )
}

export default FavoriteCard
