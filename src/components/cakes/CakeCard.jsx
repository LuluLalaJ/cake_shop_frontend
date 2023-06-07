import React from 'react'
import Figure from 'react-bootstrap/Figure'

function CakeCard({cake}) {

  return (
    <div>
      {/* <img src = {cake.image}></img> */}
      <Figure>
      <Figure.Image 
        src={cake.image}
        />
      <Figure.Caption>
        <h1>{cake.name} </h1>
        <h3>{cake.price} </h3>
        <p>{cake.description} </p>
      </Figure.Caption>
    </Figure>
    </div>

  )
}

export default CakeCard
