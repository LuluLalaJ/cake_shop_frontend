import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Figure from 'react-bootstrap/Figure'
import { CartContext } from '../../context/CartContext'
import { FavoriteContext } from '../../context/FavoriteContext'

import './cakes.css'


function CakeCard({cake}) {
  const { addToCart } = useContext(CartContext);
  const { addFavoriteCake } = useContext(FavoriteContext);
  const [isShort, setIsShort] = useState(true);
  const [addToCartAlert, setAddToCartAlert] = useState(false)
  const [addToFavAlert, setAddToFavAlert] = useState(false)


  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddToCartAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [addToCartAlert])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddToFavAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [addToFavAlert])

  const {id, image, name, price, description} = cake

  function handleAddToCart(cake) {
    addToCart(cake)
    setAddToCartAlert(true)
  }

  function handleAddToFav(id) {
    addFavoriteCake(id)
    setAddToFavAlert(true)
  }


  return (
    <Figure className="cake-card">
      <Figure.Image
        src={image}
        className='cake-image'
        />
      <Figure.Caption className='cake-info'>
        <h2>{name} </h2>
        <h3>$ {price} </h3>
        {isShort
        ? <p>{description.slice(0,150)}... </p>
        : <p>{description}</p>
        }
        <br></br>
        <button onClick={()=>setIsShort(!isShort)} className='btn'>
          {isShort
          ? "Read more"
          : "Read less"}
        </button>

      </Figure.Caption>
      <br></br>

      <button className='btn' onClick={(e)=>handleAddToCart(cake)}>Add to Cart</button>
      <button className='btn' onClick = {() => handleAddToFav(id)} >Add to Favorites</button>
      {/* <br></br>
      <br></br> */}
      <Link to = {`/reviews/${cake.id}`}><button className='btn' >Reviews</button></Link>
      {addToCartAlert && <p className='alert'>Added to cart</p>}
      {addToFavAlert && <p className='alert'>Added to favorites</p>}

    </Figure>
  )
}

export default CakeCard
