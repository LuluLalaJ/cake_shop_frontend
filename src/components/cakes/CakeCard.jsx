import React from 'react'
import Figure from 'react-bootstrap/Figure'
import './cakes.css'

function CakeCard({cake, addFavoriteCake}) {

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
      <button className='btn' >Add to Cart</button>
      <button className='btn' onClick = {() => addFavoriteCake(cake.id)} >Add to Favorites</button>
    </Figure>
  )
}

export default CakeCard
