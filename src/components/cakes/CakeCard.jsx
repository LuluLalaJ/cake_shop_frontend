import React from 'react'
import Figure from 'react-bootstrap/Figure'
import './cakes.css'

function CakeCard({cake}) {

  return (
    <div className = 'card-container'>
      {/* <img src = {cake.image} className = 'cake-image'></img> */}
      <Figure>
      <Figure.Image 
        src={cake.image}
        className = 'cake-image'
        />
      <Figure.Caption
        className = 'cake-caption'
      >
        <h1>{cake.name} </h1>
        <h3>{cake.price} </h3>
        <br></br>
        <p>{cake.description} </p>
      </Figure.Caption>
      <br></br>
      <button className='btn'>Add to Cart</button>
      <button className='btn'>Add to Favorites</button>
    </Figure>
    </div>

  )
}

export default CakeCard
