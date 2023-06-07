import React from 'react'
import Figure from 'react-bootstrap/Figure'

function CakeCard({cake}) {

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
    </Figure>
  )
}

export default CakeCard
