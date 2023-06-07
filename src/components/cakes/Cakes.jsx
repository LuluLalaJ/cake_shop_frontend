import React, {useEffect, useState}  from 'react'
import CakeCard from './CakeCard'

function Cakes({cakes}) {

  console.log(cakes)
  
  const renderCakes = cakes.map(cake =>
        <CakeCard 
          key = { cake.id }
          cake = { cake }
        />)
    

  return(
    <div>
      <h1>Cakes Page</h1>
      {renderCakes}
    </div>
  )
}

export default Cakes;
